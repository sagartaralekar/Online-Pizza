using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlinePizzaAPI.Model;

namespace OnlinePizzaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderPizzaController : ControllerBase
    {
        private readonly ILogger<OrderPizzaController> _logger;
        private static List<PizzaOrderDetail> _pizzaOrderDetails = new List<PizzaOrderDetail>();


        public OrderPizzaController(ILogger<OrderPizzaController> logger)
        {
            _logger = logger;
        }

        public IActionResult Get(Guid id)
        {

            try
            {
                var orderDetails = _pizzaOrderDetails.Find(obj=>obj.Id==id);

                if (orderDetails != null)
                {
                    return Ok(orderDetails);
                }
                else
                {
                    return NotFound($"Order id ={id} is not found");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred executing action.");
                return BadRequest(ex);
            }
        }

        // POST: api/Sorting
        [HttpPost]
        public IActionResult Post([FromBody] PizzaOrderDetail pizzaOrderDetail)
        {
            try
            {
                _pizzaOrderDetails.Add(pizzaOrderDetail);
                return Ok(pizzaOrderDetail.Id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred executing action.");
                return BadRequest(ex);
            }
        }
    }
}