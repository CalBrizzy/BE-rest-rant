const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <main>
                <h1>Edit Place</h1>
                <h2>{`${data.place.name}`}</h2>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='edit-wrapper'>
                        <div className="form-group1 col-sm-6">
                            <img src={`${data.place.pic}`} alt="" />
                            <label htmlFor="pic">Place Picture</label>
                            <input
                                className="form-control"
                                id="pic"
                                name="pic"
                                value={data.place.pic}
                                required />
                        </div>
                        <div className="form-group2 col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                value={data.place.name}
                                required />
                            <label htmlFor="city">City</label>
                            <input
                                className="form-control"
                                id="city"
                                name="city"
                                value={data.place.city}
                                required />
                            <label htmlFor="state">State</label>
                            <input
                                className="form-control"
                                id="state"
                                name="state"
                                value={data.place.state}
                                required />
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                className="form-control"
                                id="cuisines"
                                name="cuisines"
                                value={data.place.cuisines}
                                required />
                                <label htmlFor="founded">Founded</label>
                                <input  className='form-control'
                                id='founded' 
                                name='founded'
                                value={data.place.founded} />
                            <button type='submit' className='btn btn-primary'>Update Place</button>
                        </div>
                    </div>
                </form>


            </main>
        </Def>
    )
}

module.exports = edit_form
