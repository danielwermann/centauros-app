namespace Centauros.App.Tasks
{
    using System.Collections.Generic;
    using System.Linq;

    using Domain;
    using Domain.Contracts.Tasks;

    using SharpArch.Domain.PersistenceSupport;

    public class HealthCarePlanTasks : IHealthCarePlanTasks
    {
        private readonly IRepository<HealthCarePlan> healthCarePlanRepository;

        public HealthCarePlanTasks(IRepository<HealthCarePlan> healthCarePlanRepository)
        {
            this.healthCarePlanRepository = healthCarePlanRepository;
        }

        public List<HealthCarePlan> GetAll()
        {
            var items = this.healthCarePlanRepository.GetAll().ToList();
            return items;
        }

        public HealthCarePlan Get(int id)
        {
            return this.healthCarePlanRepository.Get(id);
        }
    }
}