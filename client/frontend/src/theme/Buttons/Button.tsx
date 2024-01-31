export default function ButtonTheme() {
  return (
    <style type="text/css">
          {`

          .btn-primary, .btn-primary:hover {
            display: flex;
            justify-content: center;
            align-items: baseline;
            padding: 0.5rem 1rem;
          }

          .navbar-toggler, navbar-toggler:hover {
            border: 3px solid rgb(107 33 168);
          }

    .btn-primary {
      background-color: rgb(107 33 168);
      color: rgb(212,212,212);
      border-radius: 1rem;
      border: 1px solid rgb(107 33 168);
    }
    .btn-primary:hover {
      background-color: rgb(107 33 200);
      color: rgb(212,212,212);
      border-radius: 1rem;
      border: 1px solid rgb(107 33 200);
    }
    /* Other styles */
    `}
      </style>
  )
}
