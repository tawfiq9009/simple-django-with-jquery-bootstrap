function loadData(page=1) {
  _clean_table();

   setTimeout(function (){
    $.getJSON( "http://localhost:8000/api/book/?page="+page, function( data ) {
      var items = _build_table_items(data);
      _generate_tbody(items);

      var pages = _build_pagination_items(data);
      _generate_pagination(pages);
      $('.spinner-border').hide();
    })}, 2000);

  function _build_table_items(data) {
    var items = [];

    // build table
    $.each(data.results, function (key, val) {
      items.push(
          "<tr id='" + key + "'>" +
          "<td>" + val.id + "</td>" +
          "<td>" + val.title + "</td>" +
          "<td>" + val.author + "</td>" +
          "<td>" + val.author_email + "</td>" +
          "<td>" + val.num_of_pages + "</td>" +
          "</tr>"
      );
    });
    return items;
  }

  function _generate_tbody(items) {
    $("<tbody/>", {
      "class": "book-list",
      html: items.join("")
    }).appendTo("#books-table");
  }

  function _build_pagination_items(data) {
    // create pagination
    var page_count = Math.ceil(data.count / 5);
    var pages = []
    for (var i = 1; i <= page_count; i++) {
      pages.push(
          '<li class="page-item"><a class="page-link" onclick="loadData(' + i + ')">' + i + '</a></li>'
      )
    }
    return pages;
  }

  function _generate_pagination(pages) {
    $("<ul/>", {
      "class": "pagination",
      html: pages.join("")
    }).appendTo("#table-pagination");
  }

  function _clean_table() {
    $('.spinner-border').show();
    $('tbody').remove('.book-list');
    $('ul').remove('.pagination');
  }
}
loadData(1)