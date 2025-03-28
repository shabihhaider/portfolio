import './bootstrap';
import $ from 'jquery';

$(function() {
    
    // Toggle the dropdown menu for categories
    $(".category-btn").on('click', function() {
        $(".dropdown-menu").toggle(); // Show or hide the dropdown
    });

    // Filter projects by selected category
    $(".category-option").on('click', function() {
        var category = $(this).data("category");

        // Hide the dropdown after selection
        $(".dropdown-menu").hide();

        // Filter the projects based on the selected category
        if (category === "all") {
            $(".card").show();
        } else {
            $(".card").each(function() {
                var cardCategory = $(this).data("category");
                if (cardCategory === category) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    // Search projects by title
    $("#search-input").on("input", function() {
        var searchText = $(this).val().toLowerCase();

        $(".card").each(function() {
            var title = $(this).find("h3").text().toLowerCase();
            if (title.indexOf(searchText) !== -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    // On hover over the card, show the project description
    $(".card").on('mouseenter', function() {
        $(this).find(".project-description").stop().fadeIn(300);
    }).on('mouseleave', function() {
        $(this).find(".project-description").stop().fadeOut(300);
    });

    // Handle form submission
    $('form').on('submit', function (event) {
        event.preventDefault(); 
        
        const $form = $(this);
        const formData = $form.serialize();

        // Clear previous errors and remove any existing success popups
        $('.form-group p #error').remove();
        $('#success-popup').remove();

        // Basic client-side validation
        let isValid = true;
        const name = $form.find('input[name="name"]').val();
        const email = $form.find('input[name="email"]').val();
        const message = $form.find('textarea[name="message"]').val();

        if (!name) {
            $form.find('input[name="name"]').closest('.form-group').append('<p id="error">Name is required</p>');
            isValid = false;
        }
        if (!email) {
            $form.find('input[name="email"]').closest('.form-group').append('<p id="error">Email is required</p>');
            isValid = false;
        }
        if (!message) {
            $form.find('textarea[name="message"]').closest('.form-group').append('<p id="error">Message is required</p>');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        $.ajax({
            url: $form.attr('action'),
            method: $form.attr('method'),
            data: formData,
            success: function (response) {
                if (response.success) {
                    // Show success popup
                    const $successPopup = $(`
                        <div id="success-popup">
                            <span>✔</span>
                            <p>Your Email sent successfully!</p>
                        </div>
                    `);
                    $('body').append($successPopup);

                    // Auto-hide popup after 5 seconds
                    setTimeout(function () {
                        $successPopup.addClass('hidden');
                        setTimeout(function () {
                            $successPopup.remove();
                        }, 500);
                    }, 5000); 

                    $form[0].reset();
                }
            },
            error: function (xhr) {
                if (xhr.status === 422) {
                    const errors = xhr.responseJSON.errors;
                    for (const field in errors) {
                        const errorMessage = errors[field][0];
                        const $field = $(`#${field}`);
                        $field.closest('.form-group').append(`<p id="error">${errorMessage}</p>`);
                    }
                } else {
                    alert('An unexpected error occurred. Please try again later.');
                }
            },
        });
    });

    // Remove error message when user focuses on an input
    $('form input, form textarea').on('focus', function () {
        $(this).closest('.form-group').find('p#error').remove();
    });

});
