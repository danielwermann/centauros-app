namespace Centauros.App.Domain
{
    using SharpArch.Domain.DomainModel;

    public class Neighborhood : Entity
    {
        public virtual string Name { get; set; }
        public virtual City City { get; set; }
    }
}
