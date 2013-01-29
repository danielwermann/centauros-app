namespace Centauros.App.Tasks
{
    using System.Collections.Generic;
    using System.Linq;

    using Domain;
    using Domain.Contracts.Tasks;

    using SharpArch.Domain.PersistenceSupport;

    public class NeighborhoodTasks : INeighborhoodTasks
    {
        private readonly IRepository<Neighborhood> neighborhoodRepository;

        public NeighborhoodTasks(IRepository<Neighborhood> neighborhoodRepository)
        {
            this.neighborhoodRepository = neighborhoodRepository;
        }

        public List<Neighborhood> GetAll()
        {
            var items = this.neighborhoodRepository.GetAll().ToList();
            return items;
        }

        public Neighborhood Get(int id)
        {
            return this.neighborhoodRepository.Get(id);
        }
    }
}