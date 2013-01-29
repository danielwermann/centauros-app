namespace Centauros.App.Tasks
{
    using System.Collections.Generic;
    using System.Linq;

    using Domain;
    using Domain.Contracts.Tasks;

    using SharpArch.Domain.PersistenceSupport;

    public class AthleteTasks : IAthleteTasks
    {
        private readonly IRepository<Athlete> athleteRepository;

        public AthleteTasks(IRepository<Athlete> athleteRepository)
        {
            this.athleteRepository = athleteRepository;
        }

        public List<Athlete> GetAll()
        {
            var items = this.athleteRepository.GetAll().ToList();
            return items;
        }

        public Athlete Get(int id)
        {
            return this.athleteRepository.Get(id);
        }

        public Athlete CreateOrUpdate(Athlete entity)
        {
            if (entity.IsValid())
            {
                this.athleteRepository.SaveOrUpdate(entity);
            }
            return entity;
        }

        public void Delete(int id)
        {
            var entity = this.athleteRepository.Get(id);
            this.athleteRepository.Delete(entity);
        }

        public bool ExistsCpf(string cpf)
        {
            return this.athleteRepository.GetAll().Any(x => x.Cpf == cpf);
        }
    }
}