export default function Header() {
    return (
        <div className="container-header">
            <div className="bg-secondary">
                <div className="container justify-content-center text-center pb-3 bg-secondary">
                    <img src=".\img\shyGuy.jpg" className="img-fluid" />
                    <h1 className="justify-content-center text-center pb-3 bg-secondary ">Shy Guys and Fries</h1>
                    <div className='row'>
                        <div className='col'>Hours of Operation:<br></br>Monday - Saturday: 10am - 11pm<br></br>Sunday: Closed</div>
                        <div className='col'>348 E Main St<br></br>Lexington, KY</div>
                    </div>
                </div>
            </div>
        </div>
    );
}