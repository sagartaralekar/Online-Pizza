using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlinePizzaAPI.Model
{
    public class PizzaSizeDetail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double BaseSize { get; set; }
        public double Price { get; set; }
    }
}
