namespace Centauros.App.Domain
{
    using SharpArch.Domain.DomainModel;
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Athlete : Entity
    {
        public Athlete()
        {
            CreatedOn = DateTime.Now;
        }

        [Required]
        public virtual string Name { get; set; }
        [Required]
        public virtual DateTime BirthDate { get; set; }
        [Required]
        public virtual char Gender { get; set; }
        [Required]
        public virtual float Weight { get; set; }
        [Required]
        public virtual float Height { get; set; }
        [Required]
        public virtual DateTime FirstTrainingDate { get; set; }
        [Required]
        public virtual int Position { get; set; }
        [Required]
        public virtual int Experience { get; set; }
        public virtual string Telephone { get; set; }
        [Required]
        public virtual string Cellphone { get; set; }
        [Required]
        public virtual string Email { get; set; }
        [Required]
        public virtual string UrgencyContactName { get; set; }
        [Required]
        public virtual string UrgencyContactTelephone { get; set; }
        [Required]
        public virtual string Address { get; set; }
        public virtual string AddressComplement { get; set; }
        [Required]
        public virtual City City { get; set; }
        [Required]
        public virtual Neighborhood Neighborhood { get; set; }
        [Required]
        public virtual HealthCarePlan HealthCarePlan { get; set; }
        [Required]
        public virtual string BloodType { get; set; }
        public virtual string InjuriesHistory { get; set; }
        public virtual string AllergiesDiseases { get; set; }
        [Required]
        public virtual string Cpf { get; set; }
        public virtual string CpfPath { get; set; }
        [Required]
        public virtual string Rg { get; set; }
        public virtual string RgPath { get; set; }
        public virtual string FgrCardNumber { get; set; }
        public virtual string FgrCardPath { get; set; }
        public virtual string IrbLawsPath { get; set; }
        public virtual string IrbReadyPath { get; set; }
        public virtual string MedicalAttestPath { get; set; }
        public virtual string HealthCarePlanCardPath { get; set; }
        public virtual string HealthCarePlanCardNumber { get; set; }
        public virtual DateTime CreatedOn { get; set; }
    }
}