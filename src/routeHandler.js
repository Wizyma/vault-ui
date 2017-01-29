'use strict';

var secrets = require('./secrets');
// var login = require('./login');
var policies = require('./policies');
var respwrapping = require('./respwrapping');
var vaultapi = require('./vaultapi');

module.exports = (function () {
    return {
        // listAuthBackends: login.listAuthBackends,
        // login: login.login,
        listSecretBackends: secrets.listSecretBackends,
        listSecrets: secrets.listSecrets,
        getSecret: secrets.getSecret,
        writeSecret: secrets.writeSecret,
        deleteSecret: secrets.deleteSecret,
        listPolicies: policies.listPolicies,
        getPolicy: policies.getPolicy,
        updatePolicy: policies.updatePolicy,
        deletePolicy: policies.deletePolicy,
        setGithubTeamPolicy: policies.setGithubTeamPolicy,
        getGithubTeamPolicy: policies.getGithubTeamPolicy,
        wrapValue: respwrapping.wrapResponse,
        unwrapValue: respwrapping.unwrapResponse,
        vaultapi: vaultapi.callMethod
    };
})();
