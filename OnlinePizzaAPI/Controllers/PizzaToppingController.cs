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
    [Microsoft.AspNetCore.Mvc.ApiController]
    public class PizzaToppingController : ControllerBase
    {
        public IActionResult Get()
        {
            var pizzaToppings = new List<ToppingDetail>() { new ToppingDetail() {  Id=1, Name="anchovy", Price=10},
                                                                                      new ToppingDetail() {Id=1, Name ="anchovy", Price =10},
                                                                                      new ToppingDetail() {Id=2, Name ="bacon", Price =20},
                                                                                      new ToppingDetail() {Id=3, Name ="basil", Price =30},
                                                                                      new ToppingDetail() {Id=4, Name ="chili", Price =40},
                                                                                      new ToppingDetail() {Id=1, Name ="mozzarella", Price =10},
                                                                                      new ToppingDetail() {Id=2, Name ="mushroom", Price =20},
                                                                                      new ToppingDetail() {Id=3, Name ="olive", Price =30},
                                                                                      new ToppingDetail() {Id=4, Name ="onion", Price =40},
                                                                                      new ToppingDetail() {Id=1, Name ="pepper", Price =10},
                                                                                      new ToppingDetail() {Id=2, Name ="pepperoni", Price =20},
                                                                                      new ToppingDetail() {Id=3, Name ="prawn", Price =30},
                                                                                      new ToppingDetail() {Id=4, Name ="sweetcorn", Price =40}
                                                                                  };
            return Ok(pizzaToppings);
        }
    }
}