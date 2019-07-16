import React from 'react';

export default function CardColumns({ columnItems, title = false }) {
  return (
    <div
      className={
        title
          ? 'container-fluid text-center d-none d-md-block d-lg-block'
          : 'container-fluid text-center'
      }>
      <div className="row">
        {columnItems.map((item, index) => {
          return (
            <>
              <div key={index} className="col-10 m-auto col-lg-2 col-md-1">
                <div
                  className={
                    title
                      ? 'text-uppercase  mb-2 font-weight-bolder'
                      : 'text-uppercase  mb-2'
                  }>
                  {item}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
