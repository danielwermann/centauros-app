namespace Centauros.App.Domain.Contracts.Tasks
{
    using System.Collections.Generic;
    using Centauros.App.Domain;

    public interface IAthleteTasks
    {
        Athlete Get(int id);

        bool ExistsCpf(string cpf);

        Athlete CreateOrUpdate(Athlete athlete);

        void Delete(int id);
    }
}
