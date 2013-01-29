Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'Centauros',
    models: ['Athlete'],
    controllers: ['Athletes'],
    autoCreateViewport: true
});