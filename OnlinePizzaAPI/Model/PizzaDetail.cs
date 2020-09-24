using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlinePizzaAPI.Model
{
    public class PizzaDetail
    {
        public int Id { get; set; }
        public PizzaSizeDetail PizzaSize { get; set; }
        public List<ToppingDetail> ToppingDetails { get; set; }
    }
}
