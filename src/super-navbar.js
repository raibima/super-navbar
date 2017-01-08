import React from 'react';

const Navbar = props => {
  const children = React.Children.map(props.children, child => {
    return <li className={child.props['data-active'] && 'active'}>{child}</li>
  });

  return (
    <nav className={props.pullRight && 'right'}>
      <ul>
        {children}
      </ul>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Cabin');

        :global(body) {
          margin: 0;
        }

        nav {
          background: #2B3A42;
          padding: 0 1.5em;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        ul :global(li) {
          display: inline-block;
        }

        nav :global(li) :global(a) {
          color: white;
          text-transform: uppercase;
          text-decoration: none;
          font-family: "Cabin", sans-serif;
          font-size: 13px;
          padding: 1.5em 0.75em;
          display: block;
        }

        nav :global(.active) {
          background: #354851;
        }

        .right ul {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;