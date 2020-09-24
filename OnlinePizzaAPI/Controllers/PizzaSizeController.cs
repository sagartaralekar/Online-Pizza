using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlinePizzaAPI.Model;

namespace OnlinePizzaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaSizeController : ControllerBase
    {

        public IActionResult Get()
        {
            var pizzaSizes = new List<PizzaSizeDetail>() { new PizzaSizeDetail() {  Id=1, Name="small", BaseSize= 9.99, Price=200},
                                                                                      new PizzaSizeDetail() {Id=1, Name ="medium", BaseSize= 12.99, Price =300},
                                                                                      new PizzaSizeDetail() {Id=2, Name ="large", BaseSize= 16.99, Price =500}
                                                                                  };
            return Ok(pizzaSizes);
        }
    }
}