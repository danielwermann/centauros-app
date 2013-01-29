namespace Centauros.App.Domain.Contracts.Tasks
{
    using System.Collections.Generic;
    using Centauros.App.Domain;

    public interface INeighborhoodTasks
    {
        Neighborhood Get(int id);
    }
}
