namespace Centauros.App.Domain.Contracts.Tasks
{
    using System.Collections.Generic;
    using Centauros.App.Domain;

    public interface ICityTasks
    {
        City Get(int id);
        List<City> GetAll();
    }
}
