const CampaignList = (props) => {
  return (
    <div className="d-flix">
      <h2 className="border-bottom pb-3">Campaign List</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm ">
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
                <span class="badge bg-info text-light me-1">shoose</span>
                <span class="badge bg-info text-light me-1">boots</span>
                <span class="badge bg-info text-light me-1">skarpa</span>
                <span class="badge bg-info text-light me-1">skarpa</span>
                <span class="badge bg-info text-light me-1">skarpa</span>
              </td>
              <td className="d-md-flex justify-content-md-end">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="far fa-edit"></i> edit
                  </button>

                  <button type="button" class="btn btn-sm btn-outline-danger">
                    <i class="far fa-trash-alt"></i> delete
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
