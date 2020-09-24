using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlinePizzaAPI.Model
{
    public class PizzaOrderDetail
    {
        private Guid _id;
        public Guid Id { get { return _id; } }

        public PizzaOrderDetail()
        {
            _id = Guid.NewGuid();
        }
        public List<PizzaDetail> PizzaDetailInfo { get; set; }
        public double Price { get; set; }
        public UserDetail UserDetail { get; set; }
    }
}
