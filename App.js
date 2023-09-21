const heading = React.createElement(
    "div",
    {id:"heading"},[
    React.createElement(
        "h1",
        {},
        "Halo people"
    ),
    React.createElement(
        "h2",
        {},
        "Halo puple"
    )
    ]
)



console.log(heading)// heading is a jsObject(react element) with many properties[h1 is the type;id is the attribute; rest is the child to be added in type ]
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)// convert element to html and replaces everything in root div