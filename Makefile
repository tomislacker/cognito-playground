.PHONY: patches

amazon-cognito-identity-js:
	git submodule update --init --recursive

patches: amazon-cognito-identity-js
	@cd amazon-cognito-identity-js && \
		patch \
			-p 1 \
			--forward \
			< ../amazon-cognito-identity-js_morelogging.patch
