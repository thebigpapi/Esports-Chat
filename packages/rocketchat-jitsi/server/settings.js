RocketChat.settings.addGroup('Jitsi', function() {
	RocketChat.settings.add('Jitsi_Domain', 'meet.jit.si', {
		type: 'string',
		group: 'Jitsi',
		public: true
	});

	RocketChat.settings.add('Jitsi_MUC', 'conference.meet.jit.si', {
		type: 'string', 
		group: 'Jitsi',
		public: true
	}); 

	RocketChat.settings.add('Jitsi_Focus', 'focus.meet.jit.si', {
		type: 'string',
		group: 'Jitsi',
		public: true
	});

	RocketChat.settings.add('Jitsi_ExternalConnectUrl', '//meet.jit.si/http-pre-bind', {
		type: 'string',
		group: 'Jitsi',
		public: true
	});

	RocketChat.settings.add('Jitsi_Bosh', '//meet.jit.si/http-bind', {
		type: 'string',
		group: 'Jitsi',
		public: true
	});
});
