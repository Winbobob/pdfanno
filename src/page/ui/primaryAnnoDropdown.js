/**
 * UI parts - Primary Annotation Dropdown.
 */

/**
 * Setup a click action of the Primary Annotation Dropdown.
 */
export function setup() {

    $('#dropdownAnnoPrimary').on('click', 'a', e => {

        let $this = $(e.currentTarget);
        let annoName = $this.find('.js-annoname').text();

        let currentAnnoName = $('#dropdownAnnoPrimary .js-text').text();
        if (currentAnnoName === annoName) {

            let userAnswer = window.confirm('Are you sure to clear the current annotations?');
            if (!userAnswer) {
                return;
            }

            $('#dropdownAnnoPrimary .fa-check').addClass('no-visible');
            $('#dropdownAnnoPrimary .js-text').text('Anno File');

            window.annoPage.clearAllAnnotations();

            // Close
            $('#dropdownAnnoPrimary').click();

            return false;

        }

        // Confirm to override.
        if (currentAnnoName !== 'Anno File') {
            if (!window.confirm('Are you sure to load another Primary Annotation ?')) {
                return;
            }
        }

        $('#dropdownAnnoPrimary .js-text').text(annoName);

        $('#dropdownAnnoPrimary .fa-check').addClass('no-visible');
        $this.find('.fa-check').removeClass('no-visible');

        // reload.
        window.annoPage.displayAnnotation(true);

        // Close
        $('#dropdownAnnoPrimary').click();

        return false;
    });
}
