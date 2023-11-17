$(function () {
    var x = "";
    var select1 = 0;
    var selec = 0;
    var poliArray = { "matrix": [{ "lado": [] }, { "lado": [] }, { "lado": [] }, { "lado": [] }] };
    var poliArray2 = { "matrix": [{ "lado": [] }, { "lado": [] }, { "lado": [] }, { "lado": [] }] };
    var agregar = false;
    var f2c1 = f1c2 = f1c3 = f2c2 = f3c1 = f4c1 = f1c4 = false;
    var tamp;
    var algebra = {
        "matrix": [
            { "lado": [["a", "a"], ["a", "b"], ["a", "c"], ["a", "d"]] },
            { "lado": [["b", "a"], ["b", "b"], ["b", "c"], ["b", "d"]] },
            { "lado": [["c", "a"], ["c", "b"], ["c", "c"], ["c", "d"]] },
            { "lado": [["d", "a"], ["d", "b"], ["d", "c"], ["d", "d"]] },
        ]
    };
    var algebra2 = {
        "matrix": [
            { "lado": [["a", "a"], ["a", "b"], ["a", "c"], ["a", "d"]] },
            { "lado": [["b", "a"], ["b", "b"], ["b", "c"], ["b", "d"]] },
            { "lado": [["c", "a"], ["c", "b"], ["c", "c"], ["c", "d"]] },
            { "lado": [["d", "a"], ["d", "b"], ["d", "c"], ["d", "d"]] },
        ]
    };
    var respuesta = [];
    $(document).ready(function () {
        var fin = false
        //console.log(algebra.matrix)
        for (i in algebra.matrix) {
            for (j in algebra.matrix[i].lado) {
                x = algebra.matrix[i].lado[j];
                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2p"));
                $objs.attr("lado1", x[0]);
                $objs.attr("lado2", x[1]);
            }
        }
        do {
            fila = Math.floor(Math.random() * (algebra2.matrix.length));
            columna = Math.floor(Math.random() * (algebra2.matrix[fila].lado.length));
            x = algebra2.matrix[fila].lado[columna];
            var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".areaP "));
            $objs.attr("lado1", x[0]);
            $objs.attr("lado2", x[1]);
            algebra2.matrix[fila].lado.splice(columna, 1);
            if (algebra2.matrix[fila].lado.length == 0) {
                algebra2.matrix.splice(fila, 1);
            }
            if (algebra2.matrix.length == 0) {
                fin = true;
            }
        }
        while (!fin);
        $("#boton1").click(function () {
            $(".inicioP").slideUp();
            $(".nav.nav-tabs>li:first").addClass("active");
            $("#home").addClass("in active");
        });
        $("#boton2").click(function () {
            $(".inicioP").slideUp();
            $(".nav.nav-tabs>li:last").addClass("active");
            $("#menu1").addClass("in active");
        });
        //nuevo reactivo
        $(".genrarp").click(function () {
            selec = 0;
            $(".caso2p").css("visibility", "visible");
            $(".caso2p button.cuadrado").removeAttr("disabled");
            respuesta = [];
            $(".poligonoP").empty();
            $(".caso2 tr").empty();
            var algebra3 = {
                "matrix": [
                    { "lado": [["a", "a"], ["a", "b"], ["a", "c"], ["a", "d"]] },
                    { "lado": [["b", "a"], ["b", "b"], ["b", "c"], ["b", "d"]] },
                    { "lado": [["c", "a"], ["c", "b"], ["c", "c"], ["c", "d"]] },
                    { "lado": [["d", "a"], ["d", "b"], ["d", "c"], ["d", "d"]] },
                ]
            };
            poliArray2 = { "matrix": [{ "lado": [] }, { "lado": [] }, { "lado": [] }, { "lado": [] }] };
            tamp = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
            //tamp = 4;
            pos = 0;
            var cell00 = cell01 = cel01 = cell02 = cell03 = cell10 = cell11 = cell20 = cell30 = false;
            $("#tabla1").addClass("col-xs-6");
            $("#tabla1").removeClass("row")
            $("#tabla2").addClass("col-xs-6");
            $("#tabla2").removeClass("row");
            do {
                //console.log("pos: "+pos);
                agregar = false;
                fila = Math.floor(Math.random() * (algebra3.matrix.length));
                columna = Math.floor(Math.random() * (algebra3.matrix[fila].lado.length));
                x = algebra3.matrix[fila].lado[columna];
                //console.log(x);
                switch (pos) {
                    case 0:
                        //console.log("caso 0");
                        poliArray2.matrix[0].lado.push([x[0], x[1]]);
                        var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                        var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                        $objs.attr("lado1", x[0]);
                        $objs.attr("lado2", x[1]);
                        agregar = true;
                        break;
                    case 1:
                        console.log("caso 1");
                        if (poliArray2.matrix[0].lado[0][0] == x[0]) {
                            var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                            var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                            $objs.attr("lado1", x[0]);
                            $objs.attr("lado2", x[1]);
                            $objs.addClass("hide-border-left");
                            $(".caso2 .t1 .lado1-" + x[0] + ".lado2-" + poliArray2.matrix[0].lado[0][1] + "").addClass("hide-border-right");
                            poliArray2.matrix[0].lado.push([x[0], x[1]]);
                            agregar = true;
                            cell01 = true;
                            console.log("caso 1.1");
                        }
                        else if (poliArray2.matrix[0].lado[0][1] == x[1]) {
                            var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr1"));
                            var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button >").appendTo($(".caso2 .t1 tr.tr1"));
                            $objs.attr("lado1", x[0]);
                            $objs.attr("lado2", x[1]);
                            $objs.addClass("hide-border-top");
                            $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[0][0] + ".lado2-" + poliArray2.matrix[0].lado[0][1] + "").addClass("hide-border-bottom");
                            poliArray2.matrix[1].lado.push([x[0], x[1]]);
                            agregar = true;
                            cell10 = true;
                            console.log("caso 1.2");
                        }
                        break;
                    case 2:
                        if (tamp == 3) {
                            if (cell01 == true) {
                                if (poliArray2.matrix[0].lado[1][0] == x[0]) {
                                    var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                                    var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                                    $objs.attr("lado1", x[0]);
                                    $objs.attr("lado2", x[1]);
                                    $objs.addClass("hide-border-left");
                                    $("#tabla1").addClass("row");
                                    $("#tabla1").removeClass("col-xs-6");
                                    $("#tabla2").addClass("row");
                                    $("#tabla2").removeClass("col-xs-6");
                                    $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[1][0] + ".lado2-" + poliArray2.matrix[0].lado[1][1] + "").addClass("hide-border-right");
                                    poliArray2.matrix[0].lado.push([x[0], x[1]]);
                                    agregar = true;
                                    cell01 = false;
                                    cell11 = false;
                                    cell02 = true;
                                }
                            }
                            else if (cell10 == true) {
                                if (poliArray2.matrix[1].lado[0][1] == x[1]) {
                                    var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr2"));
                                    var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr2"));
                                    $objs.attr("lado1", x[0]);
                                    $objs.attr("lado2", x[1]);
                                    $objs.addClass("hide-border-top");
                                    $(".caso2 .t1 .lado1-" + poliArray2.matrix[1].lado[0][0] + ".lado2-" + poliArray2.matrix[1].lado[0][1] + "").addClass("hide-border-bottom");
                                    poliArray2.matrix[2].lado.push([x[0], x[1]]);
                                    agregar = true;
                                    cell10 = false;
                                    cell20 = true;
                                }
                            }
                        }
                        else if (cell01 == true) {
                            if (poliArray2.matrix[0].lado[0][1] == x[1]) {
                                console.log("aqui esta el error");
                                poliArray2.matrix[1].lado.push([x[0], x[1]]);
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr1"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr1"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-top");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[0][0] + ".lado2-" + poliArray2.matrix[0].lado[0][1] + "").addClass("hide-border-bottom");
                                agregar = true;
                                cell11 = false;
                                cell10 = true;
                            }
                            else if (poliArray2.matrix[0].lado[1][1] == x[1]) {
                                //11
                                //01
                                agregar = true;
                                $(".caso2 .t2 tr.tr1").append("<button id='hide1' class='cuadrado lado2-" + poliArray2.matrix[0].lado[0][1] + "'></button>");
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr1"));
                                $(".caso2 .t1 tr.tr1").append("<button id='hide1' class='cuadrado lado2-" + poliArray2.matrix[0].lado[0][1] + "'></button>");
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr1"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-top");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[1][0] + ".lado2-" + poliArray2.matrix[0].lado[1][1] + "").addClass("hide-border-bottom");
                                poliArray2.matrix[1].lado.push([x[0], x[1]]);
                                cell01 = true;
                                cell11 = true;
                                cell00 = true;
                                cell10 = false;
                            }
                            else if (poliArray2.matrix[0].lado[1][0] == x[0]) {
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-left");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[1][0] + ".lado2-" + poliArray2.matrix[0].lado[1][1] + "").addClass("hide-border-right");
                                poliArray2.matrix[0].lado.push([x[0], x[1]]);
                                agregar = true;
                                cell01 = false;
                                cell11 = false;
                                cell02 = true;
                            }
                        }
                        else if (cell10 == true) {
                            if (poliArray2.matrix[0].lado[0][0] == x[0]) {
                                //11
                                //10
                                //Console.log("aqui esta el error");
                                agregar = true;
                                poliArray2.matrix[0].lado.push([x[0], x[1]]);
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-left");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[0][0] + ".lado2-" + poliArray2.matrix[0].lado[0][1] + "").addClass("hide-border-right");
                                cell11 = false;
                                cell01 = true;
                            }
                            else if (poliArray2.matrix[1].lado[0][0] == x[0]) {
                                //10
                                //11
                                console.log(x[0] + ", " + x[1]);
                                agregar = true;
                                poliArray2.matrix[1].lado.push([x[0], x[1]]);
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr1"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr1"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-left");
                                $(".caso2 .t1  .lado1-" + poliArray2.matrix[1].lado[0][0] + ".lado2-" + poliArray2.matrix[1].lado[0][1] + "").addClass("hide-border-right");
                                cell01 = false
                                cell11 = true;
                                cell10 = true
                            }
                            else if (poliArray2.matrix[1].lado[0][1] == x[1]) {
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr2"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr2"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-top");
                                $(".caso2 .t1  .lado1-" + poliArray2.matrix[1].lado[0][0] + ".lado2-" + poliArray2.matrix[1].lado[0][1] + "").addClass("hide-border-bottom");
                                poliArray2.matrix[2].lado.push([x[0], x[1]]);
                                agregar = true;
                                cell10 = false;
                                cell20 = true;
                            }
                        }
                        break;
                    case 3:
                        if (cell01 == true && cell10 == true) {
                            console.log("caso 3 -1");
                            if (poliArray2.matrix[0].lado[1][1] == x[1] && poliArray2.matrix[1].lado[0][0] == x[0]) {
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr1"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr1"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-top");
                                $objs.addClass("hide-border-left");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[1][0] + ".lado2-" + poliArray2.matrix[0].lado[1][1] + "").addClass("hide-border-bottom");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[1].lado[0][0] + ".lado2-" + poliArray2.matrix[1].lado[0][1] + "").addClass("hide-border-right");
                                poliArray2.matrix[1].lado.push([x[0], x[1]]);
                                agregar = true;
                                cell01 = cell10 = false
                                cell11 = true;
                            }
                        }
                        else if (cell00 == true && cell11 == true && cell02 == false && cell01 == true) {
                            console.log("caso2 #hide1");
                            if (poliArray2.matrix[0].lado[0][1] == x[1] && poliArray2.matrix[1].lado[0][0] == x[0]) {
                                //console.log($(".caso2#hide1"));
                                $(".caso2 #hide1").remove();
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").prependTo($(".caso2 .t2 tr.tr1"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").prependTo($(".caso2 .t1 tr.tr1"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-top");
                                $objs.addClass("hide-border-right");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[0][0] + ".lado2-" + poliArray2.matrix[0].lado[0][1] + "").addClass("hide-border-bottom");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[1].lado[0][0] + ".lado2-" + poliArray2.matrix[1].lado[0][1] + "").addClass("hide-border-left");
                                var c = poliArray2.matrix[1].lado.shift();
                                poliArray2.matrix[1].lado.push([x[0], x[1]]);
                                poliArray2.matrix[1].lado.push(c);
                                cell01 = cell10 = false
                                cell11 = true;
                                agregar = true;
                            }
                        }
                        else if (cell11 == true && cell01 == false && cell10 == true) {
                            console.log("caso cell11 cell01 cell10");
                            if (poliArray2.matrix[0].lado[0][0] == x[0] && poliArray2.matrix[1].lado[1][1] == x[1]) {
                                console.log("agregar cell01")
                                agregar = true;
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-bottom");
                                $objs.addClass("hide-border-left");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[0][0] + ".lado2-" + poliArray2.matrix[0].lado[0][1] + "").addClass("hide-border-right");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[1].lado[1][0] + ".lado2-" + poliArray2.matrix[1].lado[1][1] + "").addClass("hide-border-top");
                                poliArray2.matrix[0].lado.push([x[0], x[1]]);
                                cell01 = true;
                            }
                        }
                        else if (cell02 == true) {
                            console.log("caso cell02");
                            if (poliArray2.matrix[0].lado[2][0] == x[0]) {
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr0"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr0"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-left");
                                $("#tabla1").addClass("row");
                                $("#tabla1").removeClass("col-xs-6");
                                $("#tabla2").addClass("row");
                                $("#tabla2").removeClass("col-xs-6");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[0].lado[2][0] + ".lado2-" + poliArray2.matrix[0].lado[2][1] + "").addClass("hide-border-right");
                                poliArray2.matrix[0].lado.push([x[0], x[1]]);
                                agregar = true;
                                cell02 = false;
                                cell03 = true;
                            }
                        }
                        else if (cell20 == true) {
                            console.log("caso cell20");

                            if (poliArray2.matrix[2].lado[0][1] == x[1]) {
                                var $objs1 = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'><div class='l1'>" + x[0] + "</div><div class='l2'>" + x[1] + "</div ></button > ").appendTo($(".caso2 .t2 tr.tr3"));
                                var $objs = $("<button class='cuadrado lado1-" + x[0] + "  lado2-" + x[1] + "'></button > ").appendTo($(".caso2 .t1 tr.tr3"));
                                $objs.attr("lado1", x[0]);
                                $objs.attr("lado2", x[1]);
                                $objs.addClass("hide-border-top");
                                $(".caso2 .t1 .lado1-" + poliArray2.matrix[2].lado[0][0] + ".lado2-" + poliArray2.matrix[2].lado[0][1] + "").addClass("hide-border-bottom");
                                poliArray2.matrix[3].lado.push([x[0], x[1]]);
                                agregar = true;
                                cell20 = false;
                                cell30 = true;
                            }
                        }
                        else {
                            //console.log("Salir del ciclo");
                            pos = tamp;
                        }
                        break;
                    case 4:
                        //console.log("caso 4");
                        pos = tamp;
                        break;
                    default:
                }
                if (agregar) {
                    algebra3.matrix[fila].lado.splice(columna, 1);
                    if (algebra3.matrix[fila].lado.length == 0) {
                        algebra3.matrix.splice(fila, 1);
                    }
                    if (algebra3.matrix.length == 0) {
                        fin = true;
                    }
                    pos++;
                    //console.log("agregar pos: " + pos);
                }
            }
            while (pos != tamp);
            var alatx = "";
            switch (tamp) {
                case 2:
                    if (cell01) {
                        alatx += poliArray2.matrix[0].lado[0][0];
                        alatx += "(";
                        for (i = 0; i < 2; i++) {
                            s = poliArray2.matrix[0].lado[i][1];
                            alatx += s;
                            if (i == 1) {
                                alatx += ")";
                            } else {
                                alatx += "+";
                            }
                        }
                    } else if (cell10) {
                        alatx += "(";
                        for (i = 0; i < 2; i++) {
                            s = poliArray2.matrix[i].lado[0][0];
                            alatx += s;
                            if (i == 1) {
                                alatx += ")";
                            } else {
                                alatx += "+";
                            }
                        }
                        alatx += poliArray2.matrix[1].lado[0][1];
                    }
                    break
                case 3:
                    if (cell02) {
                        alatx += poliArray2.matrix[0].lado[0][0];
                        alatx += "(";
                        for (i = 0; i < 3; i++) {
                            s = poliArray2.matrix[0].lado[i][1];
                            alatx += s;
                            if (i == 2) {
                                alatx += ")";
                            } else {
                                alatx += "+";
                            }
                        }
                    } else if (cell20) {
                        alatx += "(";
                        for (i = 0; i < 3; i++) {
                            s = poliArray2.matrix[i].lado[0][0];
                            alatx += s;
                            if (i == 2) {
                                alatx += ")";
                            } else {
                                alatx += "+";
                            }
                        }
                        alatx += poliArray2.matrix[1].lado[0][1];
                    }
                    break;
                case 4:
                    if (cell03) {
                        alatx += poliArray2.matrix[0].lado[0][0];
                        alatx += "(";
                        for (i = 0; i < 4; i++) {
                            s = poliArray2.matrix[0].lado[i][1];
                            alatx += s;
                            if (i == 3) {
                                alatx += ")";
                            } else {
                                alatx += "+";
                            }
                        }
                    }
                    else if (cell30) {
                        alatx += "(";
                        for (i = 0; i < 4; i++) {
                            s = poliArray2.matrix[i].lado[0][0];
                            alatx += s;
                            if (i == 3) {
                                alatx += ")";
                            } else {
                                alatx += "+";
                            }
                        }
                        alatx += poliArray2.matrix[1].lado[0][1];
                    }
                    else if (cell11) {
                        alatx2 = poliArray2.matrix[0].lado[0][0] + "+" + poliArray2.matrix[1].lado[0][0];
                        alatx3 = poliArray2.matrix[1].lado[0][1] + "+" + poliArray2.matrix[1].lado[1][1];
                        if ((poliArray2.matrix[0].lado[0][0] == poliArray2.matrix[1].lado[0][1] && poliArray2.matrix[1].lado[0][0] == poliArray2.matrix[1].lado[1][1]) || (poliArray2.matrix[0].lado[0][0] == poliArray2.matrix[1].lado[1][1] && poliArray2.matrix[1].lado[0][1] == poliArray2.matrix[1].lado[0][0])) {
                            alatx += "(" + alatx3 + ")<sup>2</sup>";
                        }
                        else {
                            alatx += "(" + alatx2 + ")(" + alatx3 + ")";
                        }
                    }
                    break;
            }
            $(".caso2 table").css("visibility", "hidden");
            $(".poligonoA").empty();
            $(".poligonoA").append(alatx);
            //console.log("fin de la matrix");
        });
        //fin del nuevo reactivo
        $(".caso2p button.cuadrado").click(function () {
            //console.log(poliArray2.matrix);
            if (selec < 4) {
                $(this).attr("disabled", "disabled");
                //$(this).hide();
                var obj230 = $("<button class='cuadrado  lado1-" + $(this).attr("lado1") + "  lado2-" + $(this).attr("lado2") + "'><div class='l1'>" + $(this).attr("lado1") + "</div><div class='l2'>" + $(this).attr("lado2") + "</div ></button > ").appendTo($(".poligonoP"))
                obj230.attr("lado1", $(this).attr("lado1"));
                obj230.attr("lado2", $(this).attr("lado2"));
                obj230.click(function () {
                    $(this).remove();
                    $(".caso2p button.cuadrado.lado1-" + $(this).attr("lado1") + ".lado2-" + $(this).attr("lado2") + "").removeAttr("disabled");
                    selec--;
                });
                selec++;
                //console.log(selec);
            }
        });
        $(".evap2").click(function () {
            var valres;
            var valres2 = true;
            respuesta = [];
            var arrypol = $(".poligonoP").children();
            if (tamp > 0) {
                if (selec < tamp) {
                    //alert("Falta poligonos");
                    swal({
                        title: "¡ERROR!",
                        text: "Falta poligonos.",
                        type: "error",
                        html: true,
                        timer: 5000,
                        showConfirmButton: true
                    }, function () {
                        swal.close();
                    });
                }
                else {
                    //console.log(arrypol.length);
                    valres = false;
                    for (w = 0; w < arrypol.length; w++) {
                        valresp = false;
                        for (i = 0; i < poliArray2.matrix.length; i++) {
                            for (j = 0; j < poliArray2.matrix[i].lado.length; j++) {
                                xobj = poliArray2.matrix[i].lado[j];
                                if ($(arrypol[w]).attr("lado1") === xobj[0] && $(arrypol[w]).attr("lado2") === xobj[1]) {
                                    valresp = true;
                                    console.log("si es verdad");
                                }
                            }
                        }
                        respuesta.push(valresp);
                    }
                    console.log(respuesta)
                    for (i = 0; i < respuesta.length; i++) {
                        if (respuesta[i] == false) {
                            valres2 = false;
                        }
                    }
                    if (valres2) {
                        swal({
                            title: "Bien hecho",
                            text: "El poligono es correcto.",
                            type: "success",
                            html: true,
                            timer: 2000,
                            showConfirmButton: true
                        }, function () {
                            swal.close();
                        });
                        $(".caso2 table").css("visibility", "visible");
                    }
                    else {
                        //alert("Uno o mas poligonos estan mal")
                        swal({
                            title: "¡ERROR!",
                            text: "Uno o mas poligonos estan mal.",
                            type: "error",
                            html: true,
                            timer: 5000,
                            showConfirmButton: true
                        }, function () {
                            swal.close();
                        });
                    }
                }
            }
            else {
                //alert("Genera poligono");
                swal({
                    title: "Genera poligono",
                    text: "Genera poligono, primero oprime ''Nuevo reactivo''",
                    icon: "error",
                    html: true,
                    timer: 5000,
                    buttons: true,
                    dangerMode: true,
                    //showConfirmButton: true
                }, function () {
                    swal.close();
                });
            }
        });
        $("#atras").click(function () {
            location.reload();
        });
        $(".areaP button.cuadrado").click(function () {
            var i;
            //console.log(poliArray);
            //$(".respuesta2 table"
            //$(".respuesta2 tr").remove("span");
            switch (select1) {
                case 0:
                    agregar = true;
                    poliArray.matrix[0].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                    var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr0"));
                    //$(".respuesta2 tr.tr0").append($objt21);
                    ($objt21).clone().appendTo($(".respuesta2 tr.tr0")).empty("div");

                    break;
                case 1:
                    if (poliArray.matrix[0].lado[0][0] == $(this).attr("lado1")) {
                        var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr0"));
                        //$(".respuesta2 tr.tr0").append($(this));
                        ($objt21).clone().appendTo($(".respuesta2 tr.tr0")).empty("div");
                        poliArray.matrix[0].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                        agregar = true;
                        f1c2 = true;
                    }
                    else if (poliArray.matrix[0].lado[0][1] == $(this).attr("lado2")) {
                        var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr1"));
                        ($objt21).clone().appendTo($(".respuesta2 tr.tr1")).empty("div");
                        //$(".respuesta2 tr.tr1").append($(this));
                        poliArray.matrix[1].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                        agregar = true;
                        f2c1 = true;
                    }
                    $(".evap").removeAttr("disabled")
                    $(".evap").removeClass("disabled");
                    break;
                case 2:
                    if (f1c2 == true) {
                        if (poliArray.matrix[0].lado[0][1] == $(this).attr("lado2")) {
                            poliArray.matrix[1].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr1"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr1")).empty("div");
                            agregar = true;
                            f2c2 = false;
                            f2c1 = true;
                        }
                        else if (poliArray.matrix[0].lado[1][1] == $(this).attr("lado2")) {
                            agregar = true;
                            $(".areaP1 tr.tr1").append("<button id='hide1' class='btn-link cuadrado lado2-" + poliArray.matrix[0].lado[0][1] + "'></button>");
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr1"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr1")).empty("div");
                            poliArray.matrix[1].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            f1c2 = true;
                            f2c2 = true;
                            f2c1 = false;
                        }
                        else if (poliArray.matrix[0].lado[1][0] == $(this).attr("lado1")) {
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr0"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr0")).empty("div");
                            poliArray.matrix[0].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            agregar = true;
                            f1c2 = false;
                            f2c2 = false;
                            f1c3 = true;
                            $("#table1").removeClass("col-xs-6");
                            $("#table1").addClass("row");
                            $("#table2").removeClass("col-xs-6");
                            $("#table2").addClass("row");
                        }
                    }
                    else if (f2c1 == true) {
                        if (poliArray.matrix[0].lado[0][0] == $(this).attr("lado1")) {
                            agregar = true;
                            poliArray.matrix[0].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr0"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr0")).empty("div");
                            f2c2 = false;
                            f1c2 = true;
                            $("#table1").removeClass("col-xs-6");
                            $("#table1").addClass("row");
                            $("#table2").removeClass("col-xs-6");
                            $("#table2").addClass("row");
                        }
                        else if (poliArray.matrix[1].lado[0][0] == $(this).attr("lado1")) {
                            agregar = true;
                            poliArray.matrix[1].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr1"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr1")).empty("div");
                            f1c2 = false
                            f2c2 = true;
                            f2c1 = true
                        }
                        else if (poliArray.matrix[1].lado[0][1] == $(this).attr("lado2")) {
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr2"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr2")).empty("div");
                            poliArray.matrix[2].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            agregar = true;
                            f2c1 = false;
                            f3c1 = true;
                        }
                    }
                    break;
                case 3:
                    if (f1c2 == true && f2c1 == true) {
                        if (poliArray.matrix[0].lado[1][1] == $(this).attr("lado2") && poliArray.matrix[1].lado[0][0] == $(this).attr("lado1")) {
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr1"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr1")).empty("div");
                            poliArray.matrix[1].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            agregar = true;
                            f1c2 = f2c1 = false
                            f2c2 = true;
                        }
                    }
                    else if (f1c2 == false && f2c2 == true) {
                        if (poliArray.matrix[0].lado[0][0] == $(this).attr("lado1") && poliArray.matrix[1].lado[1][1] == $(this).attr("lado2")) {
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr0"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr0")).empty("div");
                            poliArray.matrix[0].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            agregar = true;
                            f1c2 = f2c1 = false
                            f2c2 = true;
                        }
                    }
                    else if (f2c1 == false && f2c2 == true) {
                        if (poliArray.matrix[0].lado[0][1] == $(this).attr("lado2") && poliArray.matrix[1].lado[0][0] == $(this).attr("lado1")) {
                            $("#hide1").remove();
                            var $objt21 = ($(this)).prependTo($(".areaP1 tr.tr1"));
                            ($objt21).clone().prependTo($(".respuesta2 tr.tr1")).empty("div");
                            var x = poliArray.matrix[1].lado.shift();
                            poliArray.matrix[1].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            poliArray.matrix[1].lado.push(x);
                            f1c2 = f2c1 = false
                            f2c2 = true;
                            agregar = true;
                        }
                    }
                    else if (f1c3 == true) {
                        if (poliArray.matrix[0].lado[2][0] == $(this).attr("lado1")) {
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr0"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr0")).empty("div");
                            poliArray.matrix[0].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            agregar = true;
                            f1c3 = false;
                            f1c4 = true;
                            $("#table1").removeClass("col-xs-6");
                            $("#table1").addClass("row");
                            $("#table2").removeClass("col-xs-6");
                            $("#table2").addClass("row");
                        }
                    }
                    else if (f3c1 == true) {
                        if (poliArray.matrix[1].lado[0][1] == $(this).attr("lado2")) {
                            var $objt21 = ($(this)).appendTo($(".areaP1 tr.tr3"));
                            ($objt21).clone().appendTo($(".respuesta2 tr.tr3")).empty("div");
                            poliArray.matrix[3].lado.push([$(this).attr("lado1"), $(this).attr("lado2")]);
                            agregar = true;
                            f3c1 = false;
                            f4c1 = true;
                        }
                    }
                    break;
                case 4:
                    $(".areaP  button.cuadrado").attr("disabled", "disabled");
                    $(".evap").removeAttr("disabled");
                    $(".evap").removeClass("disabled");
                    break;
                default:
            }
            if (agregar) {
                select1++;
                $(".areaP1  button.cuadrado").attr("disabled", "disabled");
                $(".respuesta2  button.cuadrado").attr("disabled", "disabled");
            }
            else if (select1 != 4) {
                swal({
                    title: "¡ERROR!",
                    text: "Elemento no coincide.",
                    type: "error",
                    html: true,
                    timer: 5000,
                    showConfirmButton: true
                }, function () {
                    swal.close();
                });
            }
            agregar = false;
        });
        $(".evap").click(function () {
            if (select1 != 0) {
                $(".areaP .cuadrado").addClass("disabled");
                $(".respuesta2 span.l1").empty();
                $(".respuesta2 span.l2").empty();
                text = "";
                var text2 = "";
                var text3 = "";
                var text = "<p>";
                var completo = true;
                text += "<strong>";
                switch (select1) {
                    case 2:
                        if (f1c2) {
                            for (i in poliArray.matrix) {
                                for (j in poliArray.matrix[i].lado) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (j == 1) {
                                        text += "=";
                                    }
                                    else { text += "+"; }
                                }
                            }
                            text += poliArray.matrix[0].lado[0][0];
                            $(".respuesta2 span.l1").append(poliArray.matrix[0].lado[0][0]);
                            text2 += "(";
                            for (i = 0; i < 2; i++) {
                                s = poliArray.matrix[0].lado[i][1];
                                text2 += s;
                                if (i == 1) {
                                    text2 += ")";
                                } else {
                                    text2 += "+";
                                }
                            }
                            $(".respuesta2 span.l2").append(text2);
                            text += text2;
                        }
                        else if (f2c1) {
                            for (i in poliArray.matrix) {
                                for (j in poliArray.matrix[i].lado) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (
                                        i == 1) {
                                        text += "=";
                                    }
                                    else { text += "+"; }
                                }
                            }
                            text2 += "(";
                            for (i = 0; i < 2; i++) {
                                s = poliArray.matrix[i].lado[0][0];
                                text2 += s;
                                if (i == 1) {
                                    text2 += ")";
                                } else {
                                    text2 += "+";
                                }
                            }
                            $(".respuesta2 span.l1").append(text2);
                            $(".respuesta2 span.l2").append(poliArray.matrix[0].lado[0][1]);
                            text += text2;
                            text += poliArray.matrix[0].lado[0][1];
                        }
                        break;
                    case 3:
                        if (f1c3) {
                            for (i in poliArray.matrix) {
                                for (j in poliArray.matrix[i].lado) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (j == 2) {
                                        text += "=";
                                    }
                                    else { text += "+"; }
                                }
                            }
                            text += poliArray.matrix[0].lado[0][0];
                            $(".respuesta2 span.l1").append(poliArray.matrix[0].lado[0][0]);
                            text2 += "(";
                            for (i = 0; i < 3; i++) {
                                s = poliArray.matrix[0].lado[i][1];
                                text2 += s;
                                if (i == 2) {
                                    text2 += ")";
                                } else {
                                    text2 += "+";
                                }
                            }
                            $(".respuesta2 span.l2").append(text2);
                            text += text2;
                        }
                        else if (f3c1) {
                            for (i in poliArray.matrix) {
                                for (j in poliArray.matrix[i].lado) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (i == 2) {
                                        text += "=";
                                    }
                                    else { text += "+"; }
                                }
                            }
                            text2 += "(";
                            for (i = 0; i < 3; i++) {
                                s = poliArray.matrix[i].lado[0][0];
                                text2 += s;
                                if (i == 2) {
                                    text2 += ")";
                                } else {
                                    text2 += "+";
                                }
                            }
                            $(".respuesta2 span.l1").append(text2);
                            text += text2;
                            text += poliArray.matrix[0].lado[0][1];
                            $(".respuesta2 span.l2").append(poliArray.matrix[0].lado[0][1]);
                        }
                        else {
                            swal({
                                title: "¡ERROR!",
                                text: "Falta elemento para crear el poligono..",
                                type: "error",
                                html: true,
                                timer: 5000,
                                showConfirmButton: true
                            }, function () {
                                swal.close();
                            });
                            completo = false;
                        }
                        break;
                    case 4:
                        if (f1c4) {
                            for (i in poliArray.matrix) {
                                for (j in poliArray.matrix[i].lado) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (j == 3) {
                                        text += "=";
                                    }
                                    else { text += "+"; }
                                }
                            }
                            text += poliArray.matrix[0].lado[0][0];
                            $(".respuesta2 span.l1").append(poliArray.matrix[0].lado[0][0]);
                            text2 += "(";
                            for (i = 0; i < 4; i++) {
                                s = poliArray.matrix[0].lado[i][1];
                                text2 += s;
                                if (i == 3) {
                                    text2 += ")";
                                } else {
                                    text2 += "+";
                                }
                            }
                            text += text2;
                            $(".respuesta2 span.l2").append(text2);
                        } else if (f4c1) {
                            for (i in poliArray.matrix) {
                                for (j in poliArray.matrix[i].lado) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (i == 3) {
                                        text += "=";
                                    }
                                    else { text += "+"; }
                                }
                            }
                            text2 += "(";
                            for (i = 0; i < 4; i++) {
                                s = poliArray.matrix[i].lado[0][0];
                                text2 += s;
                                if (i == 3) {
                                    text2 += ")";
                                } else {
                                    text2 += "+";
                                }
                            }
                            text += text2;
                            $(".respuesta2 span.l1").append(text2);
                            text += poliArray.matrix[0].lado[0][1];
                            $(".respuesta2 span.l2").append(poliArray.matrix[0].lado[0][1]);
                        }
                        else if (f2c2) {
                            for (i = 0; i < 2; i++) {
                                for (j = 0; j < 2; j++) {
                                    x = poliArray.matrix[i].lado[j];
                                    if (x[0] == x[1]) {
                                        text += x[0] + "<sup>2</sup>";
                                    }
                                    else {
                                        text += x[0] + "" + x[1];
                                    }
                                    if (f2c2 && i == 1 && j == 1) {
                                        text += "=";
                                    }
                                    else {
                                        text += "+";
                                    }
                                }
                            }
                            text2 = poliArray.matrix[0].lado[0][0] + "+" + poliArray.matrix[1].lado[0][0];
                            text3 = poliArray.matrix[1].lado[0][1] + "+" + poliArray.matrix[1].lado[1][1];
                            $(".respuesta2 span.l1").append(text2);
                            $(".respuesta2 span.l2").append(text3);
                            if ((poliArray.matrix[0].lado[0][0] == poliArray.matrix[1].lado[0][1] && poliArray.matrix[1].lado[0][0] == poliArray.matrix[1].lado[1][1]) || (poliArray.matrix[0].lado[0][0] == poliArray.matrix[1].lado[1][1] && poliArray.matrix[1].lado[0][1] == poliArray.matrix[1].lado[0][0])) {
                                text += "(" + text3 + ")<sup>2</sup>";
                            }
                            else {
                                text += "(" + text2 + ")(" + text3 + ")";
                            }
                        }
                        break;
                    default:
                }
                if (completo) {
                    text += "</strong>";
                    $(".respuesta1").empty();
                    $(".respuesta1").append(text);
                    $(".respuesta2").css("visibility", "visible");
                }
            }
            else {
                swal({
                    title: "¡ERROR!",
                    text: "Selecciona  un binomio.",
                    type: "error",
                    html: true,
                    timer: 5000,
                    showConfirmButton: true
                }, function () {
                    swal.close();
                });
            }
        });
    });
});