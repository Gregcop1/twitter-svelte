<div class="block suggestion-list">
    <h3>Suggestions</h3>
    <ul>
        <li>
            <img src="avatar-machinerie.jpg" class="suggestion-avatar" width="48" height="48" alt=""/>
            <div class="suggestion-metas">
                <p class="suggestion-infos">
                    La machinerie
                    <span class="suggestion-account">@lamachinerie</span>
                    <button>Suivre</button>
                </p>
            </div>
        </li>
        <li>
            <img src="avatar-euratech.jpg" class="suggestion-avatar" width="48" height="48" alt=""/>
            <div class="suggestion-metas">
                <p class="suggestion-infos">
                    EuraTechnologie
                    <span class="suggestion-account">@euratechnologie</span>
                    <button>Suivre</button>
                </p>
            </div>
        </li>
        <li>
            <img src="avatar-typo3.jpg" class="suggestion-avatar" width="48" height="48" alt=""/>
            <div class="suggestion-metas">
                <p class="suggestion-infos">
                    TYPO3 France
                    <span class="suggestion-account">@TYPO3France</span>
                    <button>Suivre</button>
                </p>
            </div>
        </li>
    </ul>
    <button class="suggestion-call-to-action">Connecter d'autres carnets d'addresses</button>
</div>

<style>
    h3, ul{ margin: 0; padding: 0; }
    h3 {
        margin-bottom: calc(2*var(--page-padding));
        font-size: 1.8em;
    }
    li {
        margin: calc(.5 *var(--page-padding)); border-bottom: 1px solid var(--grey); padding: var(--page-padding) 0; list-style-type: none;
        font-weight: var(--fw-semibold);
    }

    .suggestion-avatar, .suggestion-metas { display: inline-block; vertical-align: top; }
    .suggestion-avatar { margin-right: var(--page-padding); border-radius: 50%; }
    .suggestion-metas { width: 180px; }
    .suggestion-infos {
        margin: 0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    button {
        display: block; border: 1px solid var(--blue); border-radius: 25px; padding: 2px 15px;
        color: var(--blue);
    }

    button:hover {
         background-color: var(--bright-blue);
         text-decoration: none;
    }
    .suggestion-account {
        margin-left: var(--page-padding);
        color: var(--dark-grey); font-size: .85em; font-weight: var(--fw-regular);
    }
    .suggestion-call-to-action {
        display: block; margin: calc(1.5*var(--page-padding)) 0 var(--page-padding); color: var(--dark-blue);
        font-size: 1.2em;
    }

    .suggestion-call-to-action:hover { color: var(--blue); }
</style>
