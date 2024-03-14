import "./App.css"
import Card from "./components/Card";



const App = () => {

  const data = {

    features: [
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access ",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ],
    cards: [
      {
        type: "FREE",
        cost: "$0/month",
        user: "Single User",
        features: [
          "Single User",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access ",
        ]
      },
      {
        type: "PLUS",
        cost: "$9/month",
        user: "5 Users",
        features: [
          "5 User",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access ",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
        ]
      },
      {
        type: "PRO",
        cost: "$49/month",
        user: "Unlimited Usesr",
        features: [
          "Unlimited Users",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access ",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
          "Monthly Status Reports"
        ]
      }

    ]
  }


  return (
    <>
      <div className='container-fluid'>
        <div className="row d-flex justify-content-center text-center my-4">
          {
            data.cards.map((card, index) => {
              return <Card card={card} key={index} features={data.features} />
            })
          }
        </div>
      </div>
    </>
  )
}


export default App