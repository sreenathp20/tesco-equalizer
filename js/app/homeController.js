DoAnalytics.controller('homeController', function ($scope, $q, $http) {
    var values = {
        "Preset": [0, 0, 0, 0, 0],
        "Rock": [-6,0, 3, -4, -2],
        "Pop": [0,-4, -4, -1, 4],
        "Jazz": [0,-4, -12, 6, 10],
        "Classical": [-4, -8, 0, 4, 8]
    };
    var col = ["#FF0000",
    "#FF1100",
    "#FF2300",
    "#FF3400",
    "#FF5700",
    "#FF6900",
    "#FF7B00",
    "#FF9E00",
    "#FFAF00",
    "#FFC100",
    "#FFD300",
    "#FFE400",
    "#F7CA18",
    "#E5FF00",
    "#D4FF00",
    "#C2FF00",
    "#9FFF00",
    "#8DFF00",
    "#7CFF00",
    "#6AFF00",
    "#58FF00",
    "#35FF00",
    "#24FF00",
    "#12FF00",
    "#00FF00"];
    $scope.sliders = ["range1", "range2", "range3", "range4", "range5"];
    $scope.ranges = [];
    $scope.selection = ["Preset", "Rock", "Pop", "Jazz", "Classical"];
    $scope.selected = "Preset";
    $scope.loadNoUiSlider = function () {
        angular.forEach($scope.sliders, function (value, key) {
            //$scope.mldata.stats.push(JSON.parse(value));
            var range = document.getElementById(value);
            range.style.height = '200px';
            range.style.margin = '0 auto 0px';

            noUiSlider.create(range, {
                start: [0], // 4 handles, starting at...
                margin: 1, // Handles must be at least 300 apart
                //limit: 600, // ... but no more than 600
                connect: true, // Display a colored bar between the handles
                //direction: 'rtl', // Put '0' at the bottom of the slider
                orientation: 'vertical', // Orient the slider vertically
                //behaviour: 'tap-drag', // Move handle on tap, bar is draggable
                //step: 1,
                //tooltips: true,

                range: {
                    'min': -12,
                    'max': +12
                },
                pips: { // Show a scale with the slider
                    mode: 'steps',
                    stepped: true,
                    density: 48,
                    // format: wNumb({
                    //     decimals: 2,
                    //     prefix: '$'
                    // })
                }
            });
            range.noUiSlider.on('update', function(){
                var v = range.noUiSlider.get();
                v = Math.ceil(v)+12;
                //console.log(v, key, "v", "key");
                $(".noUi-connects:eq("+key+")").css("background-color", col[v]);
            });
            $scope.ranges.push(range);
        });
        $scope.$watch('selected', function(newValue, oldValue) {
            $scope.update(newValue);
        });
    }
    $scope.update = function (band) {
        angular.forEach($scope.ranges, function (value, key) {
            var v = values[$scope.selected][key];
            value.noUiSlider.set(v);
            //console.log(value.noUiSlider.get());
            //value.start = values["Rock"][key];
        });
    }


});