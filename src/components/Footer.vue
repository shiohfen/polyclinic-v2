<template>
  <footer class="footer">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4 mb-md-0">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            gravida lorem sit amet dui facilisis, vitae varius massa gravida.
            Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Cras rutrum viverra dolor,
            at interdum tellus molestie sed.
          </p>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <h3>Contact Us</h3>
          <ul class="list-unstyled">
            <li>
              <i class="fa fa-map-marker"></i> 123 Street, City, State 12345
            </li>
            <li><i class="fa fa-phone"></i> (123) 456-7890</li>
            <li><i class="fa fa-envelope"></i> info@polyclinic.com</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Follow Us</h3>
          <ul class="list-inline">
            <li class="list-inline-item mx-3">
              <a href="#">
                <i class="fa-brands fa-facebook fa-2x"></i>
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a href="#">
                <i class="fa-brands fa-twitter fa-2x"></i>
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a href="#">
                <i class="fa-brands fa-instagram fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PolyclinicV21Footer",
};
</script>

<style  scoped>
.footer {
  background-color: #f8f9fa;
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .footer {
    padding: 5rem 0;
  }
}

.footer h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.footer p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #6c757d;
  margin-bottom: 2rem;
}

.footer ul li {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #6c757d;
}

.footer ul li i {
  margin-right: 10px;
}

.footer ul li:last-child {
  margin-bottom: 0;
}

.footer a {
  color: #6c757d;
}

.footer a:hover {
  color: #007bff;
}

.list-inline-item {
  margin-right: 15px;
}
</style>
