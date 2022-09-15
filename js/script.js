function units() {
    // Get the checkbox
    var checkBox = document.getElementById("unit_check");
    var defaultValue = checkBox.getAttribute("data-default-value");

    if (defaultValue == 'metric') {
        defaultUnits = document.getElementsByClassName("metric");
        secondaryUnits = document.getElementsByClassName("imperial");
    } else {
        defaultUnits = document.getElementsByClassName("imperial");
        secondaryUnits = document.getElementsByClassName("metric");
    }

    // If the checkbox is checked, display the output text
    if (checkBox.checked == false) {
        for (var i = 0; i < secondaryUnits.length; i++) {
            secondaryUnits[i].style.display = 'none';
        }
        for (var i = 0; i < defaultUnits.length; i++) {
            defaultUnits[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < secondaryUnits.length; i++) {
            secondaryUnits[i].style.display = 'block';
        }
        for (var i = 0; i < defaultUnits.length; i++) {
            defaultUnits[i].style.display = 'none';
        }
    }
}


var cols;
// FETCHING DATA FROM JSON FILE
// columns should be equal to data.length
$.getJSON("js/data.json",
    function (data) {
        // console.log(data.header);
        // try to fill the table
        for (cols = 0; cols < data.length; cols++) {
            // console.log(data[cols].body.propane_comp == "Yes,");
            var oven_images = "<th class=\"ooni-karu-16_col product-image-container\">" +
                "<a class=\"product-link\" href=\"#\">" +
                "<img class=\"product-image\" src=\"" + data[cols].header.image_source + "\" " +
                "alt=\"" + data[cols].header.alt + "\" loading=\"lazy\" />" +
                "</a> </th>";
            var oven_head = "<th class=\"oven-head oven-info\">" +
                "<div class=\"oven-grid\">" +
                "<a class=\"product-link\" href=\"#\">" + data[cols].header.name + "</a>" +
                "<span class=\"product-price\" > <span class=\"money\">" + data[cols].header.price + "</span></span>" +
                "<a class=\"button-primary\" href=\"#\" aria-label=\"" + data[cols].header.alt + " - View product\">" +
                "View product </a> </div > </th > ";
            var td_fuel_type = "<td class=\"value_col\">" + data[cols].body.fuel_type + "</td>";
            var td_pizza_size = "<td class=\"value_col pizza_size\"><img src=\"" + data[cols].body.pizza_size + "\" alt=\"\" /> </td>";
            var td_unboxed_size = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.unboxed_size.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.unboxed_size.metric + "</span> </td>";

            var td_weight = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.weight.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.weight.metric + "</span> </td>";
            var td_heat_time = "<td class=\"value_col\">" + data[cols].body.heat_time + "</td>";
            var td_max_temp = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.max_temp.imperial + "</span >" +
                "<span class=\"metric\">" + data[cols].body.max_temp.metric + "</span> </td > ";
            var td_material = "<td class=\"value_col\">" + data[cols].body.material + "</td>";
            var td_pizza_stone_type = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.pizza_stone_type.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.pizza_stone_type.metric + "</span> </td>";
            var td_pizza_stone_size = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.pizza_stone_size.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.pizza_stone_size.metric + "</span> </td>";

            var td_opening_height = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.opening_height.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.opening_height.metric + " </span> </td>";
            var td_fuel_consumption = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.fuel_consumption.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.fuel_consumption.metric + " </span> </td>";
            var td_gas_consumption = "<td class=\"value_col\">" +
                "<span class=\"imperial\">" + data[cols].body.gas_consumption.imperial + "</span>" +
                "<span class=\"metric\">" + data[cols].body.gas_consumption.metric + " </span> </td>";
            var td_kw = "<td class=\"value_col\">" + data[cols].body.kw + "</td>";
            var td_outdoor_use_only = "<td class=\"value_col\"><img src=\"" + data[cols].body.outdoor_use_only + "\" alt=\"\" /></td>";
            var td_view_product = "<td class=\"view_more_button_cell\"> <a class=\"button-primary\" href=\"#\"" +
                "aria - label=\"" + data[cols].header.alt + " - View product\" >" +
                "View product </a > </td > ";
            var td_propane_comp_text = "<td class=\"value_col\">" + data[cols].body.propane_comp +
                "<a class=\"inline-link\" href=\"#\"><strong>" + data[cols].body.with_burner + "</strong></a> </td>";
            var td_propane_comp_img = "<td class=\"value_col\"><img src=\"" + data[cols].body.propane_comp + "\" alt=\"\" /></td>";
            var td_natural_comp_text = "<td class=\"value_col\">" + data[cols].body.natural_comp +
                "<a class=\"inline-link\" href=\"#\"><strong>" + data[cols].body.with_burner + "</strong></a> </td>";
            var td_natural_comp_text1 = "<td class=\"value_col\">" + data[cols].body.natural_comp +
                "<a class=\"inline-link\" href=\"#\"><strong>" + data[cols].body.with_conversion_kit + "</strong></a> </td>";
            var td_natural_comp_img = "<td class=\"value_col\"><img src=\"" + data[cols].body.natural_comp + "\" alt=\"\" /></td>";

            // insert images
            $("#oven_table_images").append(oven_images);
            // insert header info 
            $("#oven_table_head").append(oven_head);
            // insert body fuel type 
            $("#fuel_type").append(td_fuel_type);
            // insert body pizza size 
            $("#pizza_size").append(td_pizza_size);
            // insert body unboxced size 
            $("#unboxed_size").append(td_unboxed_size);
            // insert body weight
            $("#o_weight").append(td_weight);
            // insert body heat up time
            $("#heat_time").append(td_heat_time);
            // insert body max temp
            $("#max_temp").append(td_max_temp);
            // insert body material
            $("#o_material").append(td_material);
            // insert body pizza stone type
            $("#pizza_stone_type").append(td_pizza_stone_type);
            // insert body pizza stone size
            $("#pizza_stone_size").append(td_pizza_stone_size);
            // insert body opening height
            $("#opening_height").append(td_opening_height);
            // insert body fuel consumption
            $("#fuel_consumption").append(td_fuel_consumption);
            // insert body gas consumption
            $("#gas_consumption").append(td_gas_consumption);
            // insert body kw
            $("#kw").append(td_kw);
            // insert body outdoor use only
            $("#outdoor_use_only").append(td_outdoor_use_only);
            // insert body view product
            $("#view_product").append(td_view_product);
            // body propane gas compatible
            if (data[cols].body.propane_comp == "Yes,") {
                // insert body propane compatible with text
                $("#propane_comp").append(td_propane_comp_text);
            }
            else {
                // insert body propane compatible with img
                $("#propane_comp").append(td_propane_comp_img);
            }
            // body natural gas compatible
            if (data[cols].body.natural_comp == "Yes,") {
                // insert body natural compatible with text
                $("#natural_comp").append(td_natural_comp_text);
            }
            else if (data[cols].body.with_conversion_kit.includes("conversion")) {
                // insert body natural compatible with text
                $("#natural_comp").append(td_natural_comp_text1);
            }
            else {
                // insert body natural compatible with img
                $("#natural_comp").append(td_natural_comp_img);
            }

        }
    });
