import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";

const Profile = () =>{

    return (
        <>
        <TopHeader />
   

        <div className="main-container -with-cta-banner">
  <div className="dashboard-layout">
      <DashboardSidebar/>
    <div className="second-section">
      <div
        className="dashboard-my-account"
        data-controller="profile-form"
      >
        <div className="dashboard-header">
          <div className="row">
            <div className="col-sm-5">
              <h1>
                Edit My Profile
              </h1>
            </div>
            <div className="col-sm-7">
              <div
                className="buttons text-uppercase"
                data-controller="dashboard--scroll-to"
              >
                <a
                  className="default-link mr-4"
                  href="/members/shahid-u"
                >
                  See My Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion"
              id="accordionRequest"
            >
              <div className="card border-0 mt-4">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    About You
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Write a biography of up to 200 characters. Use this space to describe your style, size and favourite brands!
                          </p>
                        </div>
                        <div
                          className="col-sm-8"
                          data-target="profile-form.biographyFormWrapper"
                        >
                          <form
                            acceptCharset="UTF-8"
                            action="/profile/shahid-u/biographies"
                            className="default-form"
                            data-action="ajax:success->profile-form#onUpdateProfileSuccess"
                            data-remote="true"
                            id="profile-abouts-form"
                            method="post"
                          >
                            <input
                              autoComplete="off"
                              defaultValue="patch"
                              name="_method"
                              type="hidden"
                            />
                            <input
                              autoComplete="off"
                              defaultValue="Jraz/1uM+11LgenlwDgrgL0j/MC5gefqNfg8n6dx7BCFcMzbF/MUPdLkl7CkLb3E3cymQMlYw5XXGLDrZP0U8A=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>
                                    Biography
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="user_biography"
                                    name="user[biography]"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group text-right">
                                  <input
                                    className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                    data-disable-with="Saving..."
                                    name="commit"
                                    type="submit"
                                    value="Save"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion"
              id="accordionRequest"
            >
              <div className="card border-0 mt-4">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Social Links
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Use this to show links to your social media profiles on your profile page.
                          </p>
                          <p>
                            Make sure to only input your username, you don’t need to include a link or @.
                          </p>
                        </div>
                        <div
                          className="col-sm-8"
                          data-target="profile-form.socialsFormWrapper"
                        >
                          <form
                            acceptCharset="UTF-8"
                            action="/profile/shahid-u/socials"
                            className="default-form"
                            data-action="ajax:success->profile-form#onUpdateProfileSuccess"
                            data-remote="true"
                            id="profile-socials-form"
                            method="post"
                          >
                            <input
                              autoComplete="off"
                              defaultValue="patch"
                              name="_method"
                              type="hidden"
                            />
                            <input
                              autoComplete="off"
                              defaultValue="dVprGOX5MkT+5v11Cxu1FLGi7syMZSN0mLwOeP7GIVG/KPmIAvLXSZSVogauTPPFTTkXH3okYzj0lcy39GAF/g=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Instagram Username
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_instagram_username"
                                    name="user[instagram_username]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Tiktok Username
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_tiktok_username"
                                    name="user[tiktok_username]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Twitter Username
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_twitter_username"
                                    name="user[twitter_username]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group text-right">
                                  <input
                                    className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                    data-disable-with="Saving..."
                                    name="commit"
                                    type="submit"
                                    value="Save"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <EmailSubscription />
        <Footer />
        </>
    )
}

export default Profile;
