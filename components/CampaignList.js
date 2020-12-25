const CampaignList = (props) => {
  return (
    <div className="d-flix">
      <h2 className="border-bottom pb-3">Campaign List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Campaign</th>
              <th>topic</th>
              <th>keywords</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>summer shoose</td>
              <td>shose</td>
              <td>
                <span className="badge bg-info text-light me-1">shoose</span>
                <span className="badge bg-info text-light me-1">boots</span>
                <span className="badge bg-info text-light me-1">skarpa</span>
                <span className="badge bg-info text-light me-1">skarpa</span>
                <span className="badge bg-info text-light me-1">skarpa</span>
              </td>
              <td className="d-md-flex justify-content-md-end">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    <i className="far fa-edit"></i> edit
                  </button>

                  <button type="button" className="btn btn-sm btn-outline-danger">
                    <i className="far fa-trash-alt"></i> delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CampaignList;
