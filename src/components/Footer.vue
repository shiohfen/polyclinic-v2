<template>
  <footer class="footer" ref="footer">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4 mb-md-0">
          <h3>About Us</h3>
          <p>
            `Polyclinic is a website where multiple clinics register and are
            listed, so customers can select a clinic or a doctor they prefer and
            request an appointment.`
          </p>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <h3>Contact Us</h3>
          <ul class="list-unstyled">
            <li>
              <i class="fa fa-map-marker"></i>
              <a
                href="https://www.google.com/maps/place/Baguio,+Benguet/@16.3995155,120.5681756,14z/data=!3m1!4b1!4m6!3m5!1s0x3391a16879def13f:0x8edef534be3a75c0!8m2!3d16.4023332!4d120.5960071!16zL20vMDE1bDFf"
                target="_blank"
                rel="noopener noreferrer"
                >123 Street, City, State 12345</a
              >
            </li>
            <li><i class="fa fa-phone"></i> (123) 456-7890</li>
            <li>
              <i class="fa fa-envelope"></i>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                >info@polyclinic.com</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Follow Us</h3>
          <ul class="list-inline">
            <li class="list-inline-item mx-3">
              <a href="https://www.facebook.com/norvinwayne" target="__blank">
                <i class="fa-brands fa-facebook fa-2x"></i>
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a href="https://twitter.com/" target="__blank">
                <i class="fa-brands fa-twitter fa-2x"></i>
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a href="https://www.instagram.com/" target="__blank">
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
  mounted() {
    const footer = this.$refs.footer;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("animation-started");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(footer);
  },
};
</script>

<style  scoped>
.footer {
  background-color: #f8f9fa;
  padding: 4rem 0;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1s, transform 2s;
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

.footer.animation-started {
  opacity: 1;
  transform: translateY(0);
}
</style>
