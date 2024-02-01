export default function BootstrapCustomTheme() {
  return (
    <style type="text/css">
          {`

          .btn-primary, .btn-primary:hover {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem 1rem;
            font-size: 1.25rem;
            font-weight: bold;

          }

          .navbar-toggler, navbar-toggler:hover {
            border: 3px solid rgb(107 33 168);
          }

    .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited, .btn-primary:focus {
      background-color: rgb(107 33 168);
      color: rgb(212,212,212);
      border-radius: 1rem;
      border: 1px solid rgb(107 33 168);
    }
    
    .card {
      background-color: rgb(255, 250, 255);
      color: rgb(46 16 101);
      border-radius: 1rem;
      border: 1px solid rgb(46 16 101);
      width: 25rem;

      @media (max-width: 767px) {
        .card {
          display: flex;
          width: 90rem;
          margin: auto;
        }
    }
    /* Other styles */
    `}
      </style>
  )
}
