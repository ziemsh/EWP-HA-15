/**
 * Created by Ziemsi on 24.06.16.
 */

$(document).ready(function() {
    $('.tooltip').tooltipster();
    theme: 'tooltipster-punk';
});

$("#giti").DataTable({
    "ajax": "data/EWP-HA-15.json"

});