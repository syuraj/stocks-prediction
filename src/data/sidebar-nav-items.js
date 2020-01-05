export default function() {
  return [
    {
      title: "Tesla",
      to: "/stock-overview",
      htmlBefore: '<i class="material-icons">show_chart</i>',
      htmlAfter: ""
    },
    {
      title: "Netflix",
      htmlBefore: '<i class="material-icons">show_chart</i>',
      to: "/nflx",
    },
    {
      title: "Facebook",
      htmlBefore: '<i class="material-icons">show_chart</i>',
      to: "/fb",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
