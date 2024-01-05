import React from 'react'

const Menucard = ({menu}) => {
  return (
    <>
      <section className='main-card--cointainer'>
        {menu.map((curElem) => {
          return (
            //)}
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{curElem.id}</span>
                  <span className="card-author subtle">{curElem.Category}</span>
                  <h2 className="card-title">{curElem.Name}</h2>
                  <span className="card-description subtle">
                    On Instagram, post a picture of your space before you moved in and started your restaurant. In the caption, talk about why you chose that location – was it the connection to the community or its proximity to fresh, local produce? Tell similar stories about the logo you chose or the name of your restaurant.

                    You know these stories – your audience doesn’t. Share them.


                  </span>
                  <div className='card-read'>Read </div>
                  <div>
                    <img src={curElem.img} className='card-media'></img>
                    <span className='card-tag subtle'>Order Now</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Menucard