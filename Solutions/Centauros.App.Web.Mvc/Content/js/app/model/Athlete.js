Ext.define('Centauros.model.Athlete', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int', mapping: 'Id' },
        { name: 'name', type: 'string', mapping: 'Name' },
        { name: 'birthDate', type: 'date', mapping: 'BirthDate' },
        { name: 'gender', type: 'string', mapping: 'Gender' },
        { name: 'weight', type: 'auto', mapping: 'Weight' },
        { name: 'height', type: 'auto', mapping: 'Height' },
        { name: 'firstTrainingDate', type: 'date', mapping: 'FirstTrainingDate' },
        { name: 'position', type: 'int', mapping: 'Position' },
        { name: 'experience', type: 'int', mapping: 'Experience' },
        { name: 'telephone', type: 'string', mapping: 'Telephone' },
        { name: 'cellphone', type: 'string', mapping: 'Cellphone' },
        { name: 'email', type: 'string', mapping: 'Email' },
        { name: 'urgencyContactName', type: 'string', mapping: 'UrgencyContactName' },
        { name: 'urgencyContactTelephone', type: 'string', mapping: 'UrgencyContactTelephone' },
        { name: 'address', type: 'string', mapping: 'Address' },
        { name: 'addressComplement', type: 'string', mapping: 'AddressComplement' },
        { name: 'cityId', type: 'int', mapping: 'CityId' },
        { name: 'neighborhoodId', type: 'int', mapping: 'NeighborhoodId' },
        { name: 'healthCarePlanId', type: 'int', mapping: 'HealthCarePlanId' },
        { name: 'bloodType', type: 'string', mapping: 'BloodType' },
        { name: 'injuriesHistory', type: 'string', mapping: 'InjuriesHistory' },
        { name: 'allergiesDiseases', type: 'string', mapping: 'AllergiesDiseases' },
        { name: 'cpf', type: 'string', mapping: 'Cpf' },
        { name: 'cpfPath', type: 'string', mapping: 'CpfPath' },
        { name: 'rg', type: 'string', mapping: 'Rg' },
        { name: 'rgPath', type: 'string', mapping: 'RgPath' },
        { name: 'fgrCardNumber', type: 'string', mapping: 'FgrCardNumber' },
        { name: 'fgrCardPath', type: 'string', mapping: 'FgrCardPath' },
        { name: 'irbLawsPath', type: 'string', mapping: 'IrbLawsPath' },
        { name: 'irbReadyPath', type: 'string', mapping: 'IrbReadyPath' },
        { name: 'medicalAttestPath', type: 'string', mapping: 'MedicalAttestPath' },
        { name: 'healthCarePlanCardPath', type: 'string', mapping: 'HealthCarePlanCardPath' },
        { name: 'healthCarePlanCardNumber', type: 'string', mapping: 'HealthCarePlanCardNumber' },
        { name: 'createdOn', type: 'date', mapping: 'CreatedOn' }
	],
    validations: [
        {type: 'presence',  field: 'name'}
    ],
    idProperty: 'id',
    proxy: {
        type: 'rest',
        url: 'Athlete/Create'
    }
});