function Pizza(name, size, crust, toppings, notes) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.notes = notes;
}
$(document).ready(function() {
    $('form#myPizza').submit(function(event)() {
        event.preventDefault();

        var myName = $('type#name').val();
        var theSize = [];
        var theCrust = [];
        var myToppings = [];
        var myNotes = $('textarea#notes').val();

        $.each($('input[name="size"]:checked'), function() {
            theSize.push($(this).val());
        });
        .each($('input[name="crust"]:checked'), function() {
            thecrust.push($(this).val());
        });
        .each($('input[name="toppings"]:checked'), function() {
            thetoppings.push($(this).val());
        });








    });
});