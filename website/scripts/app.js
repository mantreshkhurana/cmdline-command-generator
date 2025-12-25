// CMDLine Command Generator - Main Application
document.addEventListener('DOMContentLoaded', function() {
    // State
    let selectedOS = 'macos';
    let selectedCategory = '';
    let selectedAction = '';
    let currentParameters = [];

    // DOM Elements
    const osButtons = document.querySelectorAll('.os-btn');
    const categorySelect = document.getElementById('category-select');
    const actionSelect = document.getElementById('action-select');
    const parametersGroup = document.getElementById('parameters-group');
    const parametersContainer = document.getElementById('parameters-container');
    const generateBtn = document.getElementById('generate-btn');
    const outputSection = document.getElementById('output-section');
    const commandText = document.getElementById('command-text');
    const explanationText = document.getElementById('explanation-text');
    const copyBtn = document.getElementById('copy-btn');

    // Initialize
    init();

    function init() {
        setupOSButtons();
        setupCategorySelect();
        setupActionSelect();
        setupGenerateButton();
        setupCopyButton();
        setupExampleCards();
        detectUserOS();
    }

    // Detect user's OS and pre-select it
    function detectUserOS() {
        const userAgent = navigator.userAgent.toLowerCase();
        let detectedOS = 'macos';

        if (userAgent.includes('win')) {
            detectedOS = 'windows';
        } else if (userAgent.includes('linux')) {
            detectedOS = 'linux';
        } else if (userAgent.includes('mac')) {
            detectedOS = 'macos';
        }

        selectOS(detectedOS);
    }

    // OS Button Handlers
    function setupOSButtons() {
        osButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const os = btn.dataset.os;
                selectOS(os);
            });
        });
    }

    function selectOS(os) {
        selectedOS = os;
        osButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.os === os);
        });
        updateGenerateButton();

        // If we already have a command generated, regenerate it for the new OS
        if (selectedAction && outputSection.style.display !== 'none') {
            generateCommand();
        }
    }

    // Category Select Handler
    function setupCategorySelect() {
        categorySelect.addEventListener('change', (e) => {
            selectedCategory = e.target.value;
            selectedAction = '';
            updateActionOptions();
            clearOutput();
            updateGenerateButton();
        });
    }

    function updateActionOptions() {
        actionSelect.innerHTML = '';

        if (!selectedCategory) {
            actionSelect.innerHTML = '<option value="">First select a category...</option>';
            actionSelect.disabled = true;
            hideParameters();
            return;
        }

        const category = commandDatabase[selectedCategory];
        if (!category) return;

        actionSelect.innerHTML = '<option value="">Select an action...</option>';

        Object.entries(category.actions).forEach(([key, action]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = action.label;
            actionSelect.appendChild(option);
        });

        actionSelect.disabled = false;
    }

    // Action Select Handler
    function setupActionSelect() {
        actionSelect.addEventListener('change', (e) => {
            selectedAction = e.target.value;
            updateParameters();
            clearOutput();
            updateGenerateButton();
        });
    }

    function updateParameters() {
        if (!selectedCategory || !selectedAction) {
            hideParameters();
            return;
        }

        const action = commandDatabase[selectedCategory]?.actions[selectedAction];
        if (!action || !action.parameters || action.parameters.length === 0) {
            hideParameters();
            currentParameters = [];
            return;
        }

        currentParameters = action.parameters;
        parametersContainer.innerHTML = '';

        action.parameters.forEach((param, index) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'parameter-input';
            input.placeholder = param.placeholder;
            input.dataset.name = param.name;
            input.dataset.required = param.required;
            input.id = `param-${param.name}`;

            input.addEventListener('input', updateGenerateButton);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    generateCommand();
                }
            });

            parametersContainer.appendChild(input);
        });

        parametersGroup.style.display = 'block';
    }

    function hideParameters() {
        parametersGroup.style.display = 'none';
        parametersContainer.innerHTML = '';
    }

    function getParameterValues() {
        const values = {};
        const inputs = parametersContainer.querySelectorAll('.parameter-input');

        inputs.forEach(input => {
            values[input.dataset.name] = input.value.trim();
        });

        return values;
    }

    function areRequiredParamsFilled() {
        const inputs = parametersContainer.querySelectorAll('.parameter-input');

        for (const input of inputs) {
            if (input.dataset.required === 'true' && !input.value.trim()) {
                return false;
            }
        }

        return true;
    }

    // Generate Button Handler
    function setupGenerateButton() {
        generateBtn.addEventListener('click', generateCommand);
    }

    function updateGenerateButton() {
        const isValid = selectedOS && selectedCategory && selectedAction && areRequiredParamsFilled();
        generateBtn.disabled = !isValid;
    }

    function generateCommand() {
        if (!selectedCategory || !selectedAction) return;

        const action = commandDatabase[selectedCategory]?.actions[selectedAction];
        if (!action) return;

        const commandData = action.commands[selectedOS];
        if (!commandData) return;

        let command = commandData.cmd;
        const paramValues = getParameterValues();

        // Replace placeholders with actual values
        Object.entries(paramValues).forEach(([key, value]) => {
            const placeholder = `{${key}}`;
            command = command.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), value || '');
        });

        // Clean up empty placeholders for optional params
        command = command.replace(/\s*\{[^}]+\}/g, '').trim();

        // Show output
        commandText.textContent = command;
        explanationText.textContent = commandData.explanation;
        outputSection.style.display = 'block';

        // Scroll to output
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function clearOutput() {
        outputSection.style.display = 'none';
        commandText.textContent = '';
        explanationText.textContent = '';
    }

    // Copy Button Handler
    function setupCopyButton() {
        copyBtn.addEventListener('click', async () => {
            const command = commandText.textContent;

            try {
                await navigator.clipboard.writeText(command);

                // Visual feedback
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = `
                    <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                `;

                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = `
                        <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        Copy
                    `;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                // Fallback for older browsers
                fallbackCopy(command);
            }
        });
    }

    function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            copyBtn.classList.add('copied');
            setTimeout(() => copyBtn.classList.remove('copied'), 2000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }

        document.body.removeChild(textArea);
    }

    // Example Cards Handler
    function setupExampleCards() {
        const exampleCards = document.querySelectorAll('.example-card');

        exampleCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                const action = card.dataset.action;

                if (category && commandDatabase[category]) {
                    // Update category
                    categorySelect.value = category;
                    selectedCategory = category;
                    updateActionOptions();

                    // Find and select the matching action
                    if (action) {
                        // Map example card actions to actual action keys
                        const actionMap = {
                            'create': 'create',
                            'list': 'list',
                            'find-file': 'findfile',
                            'disk-usage': 'disk',
                            'ip-address': 'ip',
                            'list-processes': 'list'
                        };

                        const mappedAction = actionMap[action] || action;

                        if (commandDatabase[category].actions[mappedAction]) {
                            actionSelect.value = mappedAction;
                            selectedAction = mappedAction;
                            updateParameters();
                            updateGenerateButton();
                        }
                    }

                    // Scroll to generator
                    document.getElementById('generator').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Generate on Ctrl/Cmd + Enter when form is focused
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            if (!generateBtn.disabled) {
                generateCommand();
            }
        }
    });
});
