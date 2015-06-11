export default (ngModule) => {
    ngModule
        .controller('EventsCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', 'Evento', 'LxProgressService',
            function($scope, LoopBackAuth, $location, Noder, Evento, LxProgressService) {

                $scope.isLoggedIn = function() {
                    if (LoopBackAuth.currentUserId) {
                        return true;
                    } else {
                        return false;
                    }
                };


                if (LoopBackAuth.currentUserId) {
                    Noder.findById({
                        'id': LoopBackAuth.currentUserId
                    }, function(data) {
                        LoopBackAuth.currentUserData = data;
                    });
                }

                $scope.ShowEvents = function() {
                    LxProgressService.circular.show('#5fa2db', '#progress');
                    Evento.find({
                            filter: {
                                "include": "comunidad"
                            }
                        })
                        .$promise
                        .then(function(eventos) {
                            LxProgressService.circular.hide();
                            $scope.eventos = eventos;
                        });
                };

                $scope.auth = LoopBackAuth;
                $scope.error = {};


                $scope.formData = {}; // the data object
                $scope.formOptions = {}; // optional form parameters
                $scope.formFields = [{ // an array holding all form fields
                        key: 'nombre', // ng-model name, saved in formData
                        type: 'lx-input', // field
                        templateOptions: { // in this case: 'lx-input' options
                            type: 'email',
                            label: 'Nombre del evento',
                            required: true
                                //fixedLabel: true,
                                //icon: 'mail',

                        }
                    }, {
                        key: 'url', // ng-model name, saved in formData
                        type: 'lx-input', // field
                        templateOptions: { // in this case: 'lx-input' options
                            type: 'url',
                            label: 'URL del evento (Publicidad o suscripción)',
                            required: true
                                //fixedLabel: true,
                                //icon:'letter'
                        }
                    }, {
                        key: 'latitud', // ng-model name, saved in formData
                        type: 'lx-input', // field
                        templateOptions: { // in this case: 'lx-input' options
                            type: 'number',
                            label: 'Latitud',
                            required: true
                                //fixedLabel: true,
                                //icon:'letter'
                        }
                    }, {
                        key: 'longitud', // ng-model name, saved in formData
                        type: 'lx-input', // field
                        templateOptions: { // in this case: 'lx-input' options
                            type: 'number',
                            label: 'Longitud',
                            required: true
                                //fixedLabel: true,
                                //icon:'letter'
                        }
                    }, {
                        key: 'fechadeinicio',
                        type: 'lx-date-picker',
                        templateOptions: {
                            label: 'Fecha de Inicio',
                            required: true
                        }
                    },


                    {
                        "type": "lx-flex",
                        "templateOptions": {
                            "flex": {
                                "container": "row",
                                "item": 6
                            },
                            "fields": [

                                {
                                    key: 'horadeinicio',
                                    type: 'lx-select',
                                    templateOptions: {
                                        "placeholder": "Hora",
                                        "selected": "name",
                                        "choice": "name",
                                        "options": [{
                                            "name": "Adam"
                                        }, {
                                            "name": "Amalie"
                                        }, {
                                            "name": "Wladimir"
                                        }, {
                                            "name": "Samantha"
                                        }, {
                                            "name": "Estefania"
                                        }]
                                    }
                                }, {
                                    key: 'minutodeinicio',
                                    type: 'lx-select',
                                    templateOptions: {
                                        "placeholder": "Choose a Person",
                                        "selected": "name",
                                        "choice": "name",
                                        "options": [{
                                            "name": "Adam"
                                        }, {
                                            "name": "Amalie"
                                        }, {
                                            "name": "Wladimir"
                                        }, {
                                            "name": "Samantha"
                                        }, {
                                            "name": "Estefania"
                                        }]
                                    }
                                }
                            ]
                        }
                    }, {
                        key: 'fechadetermino',
                        type: 'lx-date-picker',
                        templateOptions: {
                            label: 'Fecha de Inicio',
                            required: true
                        }
                    },

                    {
                        "type": "lx-flex",
                        "templateOptions": {
                            "flex": {
                                "container": "row",
                                "item": 6
                            },
                            "fields": [

                                {
                                    key: 'horadetermino',
                                    type: 'lx-select',
                                    templateOptions: {
                                        "placeholder": "Choose a Person",
                                        "selected": "name",
                                        "choice": "name",
                                        "options": [{
                                            "name": "Adam"
                                        }, {
                                            "name": "Amalie"
                                        }, {
                                            "name": "Wladimir"
                                        }, {
                                            "name": "Samantha"
                                        }, {
                                            "name": "Estefania"
                                        }]
                                    }
                                }, {
                                    key: 'minutodetermino',
                                    type: 'lx-select',
                                    templateOptions: {
                                        "placeholder": "Choose a Person",
                                        "selected": "name",
                                        "choice": "name",
                                        "options": [{
                                            "name": "Adam"
                                        }, {
                                            "name": "Amalie"
                                        }, {
                                            "name": "Wladimir"
                                        }, {
                                            "name": "Samantha"
                                        }, {
                                            "name": "Estefania"
                                        }]
                                    }
                                }
                            ]
                        }
                    }




                    , {
                        key: 'fechadetermino',
                        type: 'lx-date-picker',
                        templateOptions: {
                            label: 'Fecha de Término',
                            required: true
                        }
                    }, {
                        key: 'horadetermino',
                        type: 'lx-date-picker',
                        templateOptions: {
                            label: 'Fecha de Inicio',
                            required: true
                        }
                    }
                ];




            }
        ]);
};
