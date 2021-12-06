
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
function Login() {
  return (
    <section className="vh-100" style={{backgroundColor: '#C0C0C0'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email address" />
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" placeholder="Password" className="form-control form-control-lg" />
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: '#dd4b39'}} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998'}} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}



export default Login

