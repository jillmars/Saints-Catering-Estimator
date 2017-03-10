

function calculator() {
    var numGuests=$('input[name=guests]').val()
    var items=[]
    $('input[type=checkbox]:checked').each(function() { items.push(parseFloat(this.value)) })
    var sum = items.reduce(function(prev, curr) {
        return prev + curr
    }, 0)
    var subtotal = sum * numGuests
    return subtotal;
}

function render() {
    var subtotal = calculator()
    $('#output').text(subtotal)
}

$('input[name=guests]').on('change keyup keydown', render)
$('input[type=checkbox]').on('change', render)