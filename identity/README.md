# Didux.io Identity Contracts

----

This app is a working implementation of the [ERC 725](https://github.com/ethereum/EIPs/issues/725) and [ERC 735](https://github.com/ethereum/EIPs/issues/735) proposals for managing a unique identity on the blockchain.

Using ERC 725, a smart contract can protect function calls from being executed unless the sender has a verified claim
from a trusted issuer.

## Explanation

Imagine we want to deploy a Listing contract to sell a concert ticket, but only allow interactions from
users with a verified email address. How can we accomplish this with ERC 725?

First, lets define the entities that will be interacting:

* The _Consumer_ is an identity who wants to buy the ticket.
* The _Issuer_ is an identity which issues claims of type 'EMAIL_VERIFIED'.
* The _Listing_ will only allow _Consumers_ with an _EMAIL_VERIFIED_ claim from an _Issuer_ they trust.

This leaves us with a few questions...

1.  How does the trusted Issuer verify an email address?
2.  How does the Consumer get an EMAIL_VERIFIED claim onto their Identity?
3.  How can the Listing verify that the Consumer has an EMAIL_VERIFIED claim from a trusted Issuer?

To answer these questions, lets go through the process of setting up all the required contracts and services, starting
with the Issuer.

The job of the Issuer is to act as a trusted third party. In the future, trusted organizations may deploy their own
Issuer identity contracts onto the blockchain, which third parties can then trust. Didux.io plan to offer their own basic
Issuer contracts for verifying email addresses, phone numbers, Facebook accounts, Twitter accounts, etc. Third parties
will then be able to trust that these Didux.io Issuer contracts only issue claims if they are, in fact, true.

How will an email verifier work? A typical verification service may involve an application, for example
http://example.com/verify-email. This application will have a standard interface for verifying an email
address, whereby a user is sent an email with a special code which they then submit back to the application. Now that
the email address has been verified, it can be signed with a private key known only to the email verifier app. The
corresponding public key is on the issuer's identity. This is how a claim is verified.

More explanation to follow...

## Related

* https://github.com/mirceapasoi/erc725-735
* https://github.com/OriginProtocol/origin-playground

## Credits

* [JosefJ](https://github.com/JosefJ) for the original contract [implementation](https://github.com/JosefJ/IdentityContract)
* [Origin](https://github.com/OriginProtocol/) for examples and their contribution
