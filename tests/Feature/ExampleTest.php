<?php

it('returns a successful response', function () {
    $response = $this->get(localeUrl('/'));

    $response->assertStatus(200);
});
