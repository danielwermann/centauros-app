namespace Centauros.App.Tasks
{
    using System.Collections.Generic;
    using System.Linq;

    using Domain;
    using Domain.Contracts.Tasks;

    using SharpArch.Domain.PersistenceSupport;

    public class CityTasks : ICityTasks
    {
        private readonly IRepository<City> cityRepository;

        public CityTasks(IRepository<City> cityRepository)
        {
            this.cityRepository = cityRepository;
        }

        public List<City> GetAll()
        {
            var items = this.cityRepository.GetAll().ToList();
            return items;
        }

        public City Get(int id)
        {
            return this.cityRepository.Get(id);
        }
    }
}