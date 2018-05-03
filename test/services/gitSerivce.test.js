import { expect, should } from "chai";
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import https from 'https';
import { PassThrough } from "stream";
var gitService = require('../../services/gitService')();

chai.use(chaiAsPromised);
chai.should();
should();

var gitJson = {
    login: "sephanguyen",
    id: 138754,
    avatar_url: "https://avatars3.githubusercontent.com/u/138754?v=3",
    gravatar_id: "",
    url: "https://api.github.com/users/sephanguyen",
    html_url: "https://github.com/sephanguyen",
    followers_url: "https://api.github.com/users/sephanguyen/followers",
    following_url: "https://api.github.com/users/sephanguyen/following{/other_user}",
    gists_url: "https://api.github.com/users/sephanguyen/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sephanguyen/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sephanguyen/subscriptions",
    organizations_url: "https://api.github.com/users/sephanguyen/orgs",
    repos_url: "https://api.github.com/users/sephanguyen/repos",
    events_url: "https://api.github.com/users/sephanguyen/events{/privacy}",
    received_events_url: "https://api.github.com/users/sephanguyen/received_events",
    type: "User",
    site_admin: false,
    name: "Jonathan Mills",
    company: null,
    blog: null,
    location: null,
    email: null,
    hireable: null,
    bio: null,
    public_repos: 27,
    public_gists: 3,
    followers: 151,
    following: 0,
    created_at: "2009-10-12T16:05:52Z",
    updated_at: "2017-01-14T03:52:52Z"
}

var gitRepos = [{
    "id": 90742706,
    "name": "Angular2Example",
    "full_name": "sephanguyen/Angular2Example",
    "owner": {
      "login": "sephanguyen",
      "id": 11147043,
      "avatar_url": "https://avatars2.githubusercontent.com/u/11147043?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sephanguyen",
      "html_url": "https://github.com/sephanguyen",
      "followers_url": "https://api.github.com/users/sephanguyen/followers",
      "following_url": "https://api.github.com/users/sephanguyen/following{/other_user}",
      "gists_url": "https://api.github.com/users/sephanguyen/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sephanguyen/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sephanguyen/subscriptions",
      "organizations_url": "https://api.github.com/users/sephanguyen/orgs",
      "repos_url": "https://api.github.com/users/sephanguyen/repos",
      "events_url": "https://api.github.com/users/sephanguyen/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sephanguyen/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/sephanguyen/Angular2Example",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/sephanguyen/Angular2Example",
    "forks_url": "https://api.github.com/repos/sephanguyen/Angular2Example/forks",
    "keys_url": "https://api.github.com/repos/sephanguyen/Angular2Example/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/sephanguyen/Angular2Example/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/sephanguyen/Angular2Example/teams",
    "hooks_url": "https://api.github.com/repos/sephanguyen/Angular2Example/hooks",
    "issue_events_url": "https://api.github.com/repos/sephanguyen/Angular2Example/issues/events{/number}",
    "events_url": "https://api.github.com/repos/sephanguyen/Angular2Example/events",
    "assignees_url": "https://api.github.com/repos/sephanguyen/Angular2Example/assignees{/user}",
    "branches_url": "https://api.github.com/repos/sephanguyen/Angular2Example/branches{/branch}",
    "tags_url": "https://api.github.com/repos/sephanguyen/Angular2Example/tags",
    "blobs_url": "https://api.github.com/repos/sephanguyen/Angular2Example/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/sephanguyen/Angular2Example/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/sephanguyen/Angular2Example/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/sephanguyen/Angular2Example/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/sephanguyen/Angular2Example/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/sephanguyen/Angular2Example/languages",
    "stargazers_url": "https://api.github.com/repos/sephanguyen/Angular2Example/stargazers",
    "contributors_url": "https://api.github.com/repos/sephanguyen/Angular2Example/contributors",
    "subscribers_url": "https://api.github.com/repos/sephanguyen/Angular2Example/subscribers",
    "subscription_url": "https://api.github.com/repos/sephanguyen/Angular2Example/subscription",
    "commits_url": "https://api.github.com/repos/sephanguyen/Angular2Example/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/sephanguyen/Angular2Example/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/sephanguyen/Angular2Example/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/sephanguyen/Angular2Example/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/sephanguyen/Angular2Example/contents/{+path}",
    "compare_url": "https://api.github.com/repos/sephanguyen/Angular2Example/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/sephanguyen/Angular2Example/merges",
    "archive_url": "https://api.github.com/repos/sephanguyen/Angular2Example/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/sephanguyen/Angular2Example/downloads",
    "issues_url": "https://api.github.com/repos/sephanguyen/Angular2Example/issues{/number}",
    "pulls_url": "https://api.github.com/repos/sephanguyen/Angular2Example/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/sephanguyen/Angular2Example/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/sephanguyen/Angular2Example/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/sephanguyen/Angular2Example/labels{/name}",
    "releases_url": "https://api.github.com/repos/sephanguyen/Angular2Example/releases{/id}",
    "deployments_url": "https://api.github.com/repos/sephanguyen/Angular2Example/deployments",
    "created_at": "2017-05-09T12:23:36Z",
    "updated_at": "2017-05-09T12:34:55Z",
    "pushed_at": "2017-05-09T12:34:54Z",
    "git_url": "git://github.com/sephanguyen/Angular2Example.git",
    "ssh_url": "git@github.com:sephanguyen/Angular2Example.git",
    "clone_url": "https://github.com/sephanguyen/Angular2Example.git",
    "svn_url": "https://github.com/sephanguyen/Angular2Example",
    "homepage": null,
    "size": 38,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 127772493,
    "name": "crawlData",
    "full_name": "sephanguyen/crawlData",
    "owner": {
      "login": "sephanguyen",
      "id": 11147043,
      "avatar_url": "https://avatars2.githubusercontent.com/u/11147043?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sephanguyen",
      "html_url": "https://github.com/sephanguyen",
      "followers_url": "https://api.github.com/users/sephanguyen/followers",
      "following_url": "https://api.github.com/users/sephanguyen/following{/other_user}",
      "gists_url": "https://api.github.com/users/sephanguyen/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sephanguyen/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sephanguyen/subscriptions",
      "organizations_url": "https://api.github.com/users/sephanguyen/orgs",
      "repos_url": "https://api.github.com/users/sephanguyen/repos",
      "events_url": "https://api.github.com/users/sephanguyen/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sephanguyen/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/sephanguyen/crawlData",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/sephanguyen/crawlData",
    "forks_url": "https://api.github.com/repos/sephanguyen/crawlData/forks",
    "keys_url": "https://api.github.com/repos/sephanguyen/crawlData/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/sephanguyen/crawlData/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/sephanguyen/crawlData/teams",
    "hooks_url": "https://api.github.com/repos/sephanguyen/crawlData/hooks",
    "issue_events_url": "https://api.github.com/repos/sephanguyen/crawlData/issues/events{/number}",
    "events_url": "https://api.github.com/repos/sephanguyen/crawlData/events",
    "assignees_url": "https://api.github.com/repos/sephanguyen/crawlData/assignees{/user}",
    "branches_url": "https://api.github.com/repos/sephanguyen/crawlData/branches{/branch}",
    "tags_url": "https://api.github.com/repos/sephanguyen/crawlData/tags",
    "blobs_url": "https://api.github.com/repos/sephanguyen/crawlData/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/sephanguyen/crawlData/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/sephanguyen/crawlData/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/sephanguyen/crawlData/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/sephanguyen/crawlData/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/sephanguyen/crawlData/languages",
    "stargazers_url": "https://api.github.com/repos/sephanguyen/crawlData/stargazers",
    "contributors_url": "https://api.github.com/repos/sephanguyen/crawlData/contributors",
    "subscribers_url": "https://api.github.com/repos/sephanguyen/crawlData/subscribers",
    "subscription_url": "https://api.github.com/repos/sephanguyen/crawlData/subscription",
    "commits_url": "https://api.github.com/repos/sephanguyen/crawlData/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/sephanguyen/crawlData/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/sephanguyen/crawlData/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/sephanguyen/crawlData/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/sephanguyen/crawlData/contents/{+path}",
    "compare_url": "https://api.github.com/repos/sephanguyen/crawlData/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/sephanguyen/crawlData/merges",
    "archive_url": "https://api.github.com/repos/sephanguyen/crawlData/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/sephanguyen/crawlData/downloads",
    "issues_url": "https://api.github.com/repos/sephanguyen/crawlData/issues{/number}",
    "pulls_url": "https://api.github.com/repos/sephanguyen/crawlData/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/sephanguyen/crawlData/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/sephanguyen/crawlData/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/sephanguyen/crawlData/labels{/name}",
    "releases_url": "https://api.github.com/repos/sephanguyen/crawlData/releases{/id}",
    "deployments_url": "https://api.github.com/repos/sephanguyen/crawlData/deployments",
    "created_at": "2018-04-02T15:08:44Z",
    "updated_at": "2018-04-02T15:14:29Z",
    "pushed_at": "2018-04-02T15:14:28Z",
    "git_url": "git://github.com/sephanguyen/crawlData.git",
    "ssh_url": "git@github.com:sephanguyen/crawlData.git",
    "clone_url": "https://github.com/sephanguyen/crawlData.git",
    "svn_url": "https://github.com/sephanguyen/crawlData",
    "homepage": null,
    "size": 2563,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Go",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }];

describe('GitService', function() {
    describe('GitUser', function() {
        beforeEach(function() {
            this.request = sinon.stub(https, 'request');
        });

        it('should return user and repos', function() {
            //this.timeout(10000);
            //let gitJson = {login: 'sephanguyen'};
            let gitReponse = new PassThrough();
            gitReponse.write(JSON.stringify(gitJson));
            gitReponse.end();

            let repoReponse = new PassThrough();
            repoReponse.write(JSON.stringify(gitRepos));
            repoReponse.end();

            this.request
                .onFirstCall().callsArgWith(1, gitReponse).returns(new PassThrough())
                .onSecondCall().callsArgWith(1, repoReponse).returns(new PassThrough());
            return gitService.getUser('sephanguyen').then(
                (user) => {
                    let params = this.request.getCall(0).args;
                    params[0].headers['User-Agent'].should.equal('gitExample');

                    this.request.getCall(1).args[0].path.should.equal('/users/sephanguyen/repos');
                    
                    user.login.should.equal('sephanguyen');
                    user.should.have.property('repos');
            })
        });
        afterEach(function() {
            this.request.restore();
        });
    });
});