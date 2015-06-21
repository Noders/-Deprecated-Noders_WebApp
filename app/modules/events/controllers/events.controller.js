export default (ngModule) => {
    ngModule
        .controller('EventsCtrl', ['$scope', 'LoopBackAuth', '$location', '$stateParams', 'Noder', 'Evento', 'LxProgressService', 'Roles', 'LxNotificationService',
            function($scope, LoopBackAuth, $location, $stateParams, Noder, Evento, LxProgressService, Roles, LxNotificationService) {
                $scope.Roles = Roles;
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

                $scope.getOne = function(edit) {
                    LxProgressService.circular.show('#5fa2db', '#progress');
                    $scope.evento = {};
                    Evento.findById({
                        id: $stateParams.id,
                        filter: {
                            'include': 'comunidad',
                            'order': 'fechainicio DESC'
                        }
                    }).$promise.then(function(evento) {
                        if (!evento.urlimagen) {
                            evento.urlimagen = 'http://ui.lumapps.com/images/placeholder/2-horizontal.jpg';
                        }
                        $scope.evento = evento;
                        if (edit) {
                            $scope.formData = $scope.evento;
                            $scope.formData.latitud = $scope.evento.geo.lat;
                            $scope.formData.longitud = $scope.evento.geo.lng;
                        }
                        LxProgressService.circular.hide();
                    });
                };
                $scope.delete = function() {

                    LxNotificationService.confirm('Seguro?!', 'Decididiste borrar este evento. Realmente seguro que quieres borrarlo?', {
                        cancel: 'No borrar',
                        ok: 'Si, Borralo de la existencia!'
                    }, function(answer) {
                        if (answer) {
                            $scope.evento.activo = false;
                            Evento.prototype$updateAttributes({
                                    id: $scope.evento.id
                                }, $scope.evento)
                                .$promise
                                .then(function(data) {
                                });
                        };

                    });

                };


                $scope.edit = function() {
                    $scope.evento.geo = null;
                    if ($scope.formData.latitud && $scope.formData.longitud) {
                        $scope.evento.geo = {
                            lat: $scope.formData.latitud,
                            lng: $scope.formData.longitud
                        };
                    }
                    Evento.prototype$updateAttributes({
                            id: $scope.evento.id
                        }, $scope.evento)
                        .$promise
                        .then(function(data) {
                            LxNotificationService.success('Evento actualizado');
                        });

                };

                $scope.ShowEvents = function() {
                    LxProgressService.circular.show('#5fa2db', '#progress');
                    Evento.find({
                            filter: {
                                'include': 'comunidad',
                                'order': 'fechainicio DESC'
                            },
                            where: {
                                activo: {
                                    neq: false
                                }
                            }
                        })
                        .$promise
                        .then(function(eventos) {
                            LxProgressService.circular.hide();
                            $scope.eventos = eventos;
                        });
                };

                $scope.create = function() {
                    var geo = null;
                    if ($scope.formData.latitud && $scope.formData.longitud) {
                        geo = {
                            lat: $scope.formData.latitud,
                            lng: $scope.formData.longitud
                        };
                    }
                    var nuevoEvento = {
                        name: $scope.formData.name,
                        url: $scope.formData.url,
                        urlimagen: $scope.formData.urlimagen,
                        geo: geo,
                        fechainicio: $scope.formData.fechainicio,
                        fechatermino: $scope.formData.fechatermino,
                        comunidadId: LoopBackAuth.currentUserData.comunidadId
                    };
                    Evento.create(nuevoEvento).$promise.then(
                        function(evento) {
                            $scope.creado = true;
                            LxNotificationService.success('Evento creado correctamente');
                        });
                };

                $scope.auth = LoopBackAuth;
                $scope.error = {};


                $scope.formData = {}; // the data object
                $scope.formOptions = {}; // optional form parameters
                $scope.formFields = [{ // an array holding all form fields
                        key: 'name', // ng-model name, saved in formData
                        type: 'lx-input', // field
                        templateOptions: { // in this case: 'lx-input' options
                            type: 'text',
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
                            label: 'URL del evento (welcu o eventbrite)',
                            required: true
                                //fixedLabel: true,
                                //icon:'letter'
                        }
                    }, {
                        key: 'urlimagen', // ng-model name, saved in formData
                        type: 'lx-input', // field
                        templateOptions: { // in this case: 'lx-input' options
                            type: 'url',
                            label: 'URL de la foto (Hostear en Github)',
                            required: true
                                //fixedLabel: true,
                                //icon:'letter'
                        }
                    }, { // an array holding all form fields
                        key: 'descripcion', // ng-model name, saved in formData
                        type: 'lx-textarea', // field
                        templateOptions: { // in this case: 'lx-input' options
                            label: 'Descripción del evento',
                            required: true
                                //fixedLabel: true,
                                //icon: 'mail',

                        }
                    }, {
                        type: 'lx-flex',
                        templateOptions: {
                            flex: {
                                'container': 'row',
                                'item': 6
                            },
                            fields: [{
                                key: 'latitud', // ng-model name, saved in formData
                                type: 'lx-input', // field
                                templateOptions: { // in this case: 'lx-input' options
                                    type: 'text',
                                    label: 'Latitud (geolocalizacion)'
                                        //fixedLabel: true,
                                        //icon:'letter'
                                }
                            }, {
                                key: 'longitud', // ng-model name, saved in formData
                                type: 'lx-input', // field
                                templateOptions: { // in this case: 'lx-input' options
                                    type: 'text',
                                    label: 'Longitud (geolocalizacion)'
                                        //required: true
                                        //fixedLabel: true,
                                        //icon:'letter'
                                }
                            }]
                        }
                    }, {
                        key: 'fechainicio',
                        type: 'lx-date-picker',
                        templateOptions: {
                            label: 'Fecha de Inicio',
                            required: true
                                //required: true
                        }
                    },
                    /* {
                                        type: 'lx-flex',
                                        templateOptions: {
                                            flex: {
                                                'container': 'row',
                                                'item': 6
                                            },
                                            fields: [

                                                {
                                                    key: 'horadeinicio',
                                                    type: 'lx-select',
                                                    templateOptions: {
                                                        'placeholder': 'Hora',
                                                        'selected': 'hora',
                                                        'choice': 'hora',
                                                        required: true,
                                                        'options': [{
                                                            'hora': '01'
                                                        }, {
                                                            'hora': '02'
                                                        }, {
                                                            'hora': '03'
                                                        }, {
                                                            'hora': '04'
                                                        }, {
                                                            'hora': '05'
                                                        }, {
                                                            'hora': '06'
                                                        }, {
                                                            'hora': '07'
                                                        }, {
                                                            'hora': '08'
                                                        }, {
                                                            'hora': '09'
                                                        }, {
                                                            'hora': '10'
                                                        }, {
                                                            'hora': '11'
                                                        }, {
                                                            'hora': '12'
                                                        }, {
                                                            'hora': '13'
                                                        }, {
                                                            'hora': '14'
                                                        }, {
                                                            'hora': '15'
                                                        }, {
                                                            'hora': '16'
                                                        }, {
                                                            'hora': '17'
                                                        }, {
                                                            'hora': '18'
                                                        }, {
                                                            'hora': '19'
                                                        }, {
                                                            'hora': '20'
                                                        }, {
                                                            'hora': '21'
                                                        }, {
                                                            'hora': '22'
                                                        }, {
                                                            'hora': '23'
                                                        }, {
                                                            'hora': '24'
                                                        }]
                                                    }
                                                }, {
                                                    key: 'minutodeinicio',
                                                    type: 'lx-select',
                                                    templateOptions: {
                                                        placeholder: 'Minutos',
                                                        selected: 'minuto',
                                                        choice: 'minuto',
                                                        options: [{
                                                            minuto: '00'
                                                        }, {
                                                            minuto: '15'
                                                        }, {
                                                            minuto: '30'
                                                        }, {
                                                            minuto: '45'
                                                        }]
                                                    }
                                                }
                                            ]
                                        }
                                    },*/
                    {
                        key: 'fechatermino',
                        type: 'lx-date-picker',
                        templateOptions: {
                            label: 'Fecha de Término',
                            required: true
                        }
                    },
                    /* {
                                        type: 'lx-flex',
                                        templateOptions: {
                                            flex: {
                                                container: 'row',
                                                item: 6
                                            },
                                            fields: [{
                                                key: 'horadetermino',
                                                type: 'lx-select',
                                                templateOptions: {
                                                    'placeholder': 'Hora',
                                                    'selected': 'hora',
                                                    'choice': 'hora',
                                                    'options': [{
                                                        hora: '01'
                                                    }, {
                                                        hora: '02'
                                                    }, {
                                                        hora: '03'
                                                    }, {
                                                        hora: '04'
                                                    }, {
                                                        hora: '05'
                                                    }, {
                                                        hora: '06'
                                                    }, {
                                                        hora: '07'
                                                    }, {
                                                        hora: '08'
                                                    }, {
                                                        hora: '09'
                                                    }, {
                                                        hora: '10'
                                                    }, {
                                                        hora: '11'
                                                    }, {
                                                        hora: '12'
                                                    }, {
                                                        hora: '13'
                                                    }, {
                                                        hora: '14'
                                                    }, {
                                                        hora: '15'
                                                    }, {
                                                        hora: '16'
                                                    }, {
                                                        hora: '17'
                                                    }, {
                                                        hora: '18'
                                                    }, {
                                                        hora: '19'
                                                    }, {
                                                        hora: '20'
                                                    }, {
                                                        hora: '21'
                                                    }, {
                                                        hora: '22'
                                                    }, {
                                                        hora: '23'
                                                    }, {
                                                        hora: '24'
                                                    }]
                                                }
                                            }, {
                                                key: 'minutodetermino',
                                                type: 'lx-select',
                                                templateOptions: {
                                                    placeholder: 'Minutos',
                                                    selected: 'minuto',
                                                    choice: 'minuto',
                                                    options: [{
                                                        minuto: '00'
                                                    }, {
                                                        minuto: '15'
                                                    }, {
                                                        minuto: '30'
                                                    }, {
                                                        minuto: '45'
                                                    }]
                                                }
                                            }]
                                        }
                                    }*/
                ];




            }
        ]);
};
