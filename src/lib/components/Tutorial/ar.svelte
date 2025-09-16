<script lang="ts">
    import Toggle from "../Keyboard/Toggle.svelte";

    let step = 1;
    let visible = localStorage.getItem("hide-tutorial") != "yes";
    let hideCheckbox = false;
    let progress = 20;

    const numberOfSteps = 5;

    function next() {
        if (step < numberOfSteps) {
            step++;
        } else {
            step = 1;
        }
        progress += 100 / numberOfSteps;
        scrollTop();
    }

    function back() {
        if (step > 1) {
            step--;
        } else {
            step = numberOfSteps;
        }
        progress -= 100 / numberOfSteps;
        scrollTop();
    }

    function scrollTop() {
        const element = document.getElementById("tutorial-model");
        element.scrollTop = 0;
    }
    function done() {
        if (hideCheckbox) {
            localStorage.setItem("hide-tutorial", "yes");
        }
        visible = false;
        step = 1;
        progress = 20;
    }
</script>

{#if visible}
    <main id="tutorial-model" class="themed-shadow">
        <div style="width: {progress}%" id="progress">{" "}</div>
        {#if step == 1}
            <div id="head">
                <h2>{" "}</h2>
            </div>
        {/if}
        <div id="content">
            {#if step == 1}
                <h2>درس البداية</h2>
                <p>
                    تستعمل اللغة اليابانية
                    <span id="hd"> ثلاث </span>
                    انواع مختلفة للكتابة. الأولى و الثانية،
                    <span id="hd"> الهيراجانا </span>
                    و
                    <span id="hd"> الكتاكانا </span>
                    ، يمثلون الابجدية. أما المجموعة الثالثة
                    <span id="hd"> كانجي </span>، تمثل كلمات كاملة. كل من
                    الثلاثة يستعمل في اللغة اليابانية
                </p>{/if}
            {#if step == 2}
                <h2>هيراجانا</h2>
                <p>
                    تتكون من <span id="highlighted">46</span>
                    حرف يمثلون قطع صوتية. كل حرف يمثل صوت واحد أو مزيج من الأصوات
                </p>
                <p>
                    <span id="hd"> الهيراجانا </span>
                    تستخدم في المقام الأول للكلمات
                    <span id="hd"> اليابانية الأصلية </span>
                    و كعناصر للنحو و لتصريف الأفعال و نهايات الكلمات.و تعتبر أولى
                    الكتابات التي يتعلمها الأطفال، و تسعمل كثيرا في المهام اليومية
                    خصوصا في المحادثات دات طابع غير رسمي
                </p>
            {/if}
            {#if step == 3}
                <h2>كتاكانا</h2>
                <p>
                    <span id="hd"> على غرار هيراغانا </span>
                    ، تتألف الكاتاكانا من 46 حرف ايضا. ويمثِّل كل حرف مقطع صوتي أو
                    صوتاً. تسمح بتمثيل
                    <span id="hd"> الكلمات الأجنبية </span>
                    ، والكلمات المقترضة، والمصطلحات العلمية، والتشديد على بعض الكلمات
                    أو العبارات
                </p>
                <p>
                    وتستخدم عادة لترجمة الكلمات غير اليابانية إلى اليابانية. وهي
                    تستخدم أيضا في كتابة كلمات من أصل أجنبي، بما في ذلك أسماء
                    الأشخاص والأماكن والأشياء من لغات أخرى
                </p>
                <p>
                    بمعرفة الهيراغانا والكاتاكانا يمكن للمرء أن يكون له أساس
                    <span id="hd"> جيد </span>
                    في
                    <span id="hd">القراءة والكتابة </span>
                    باللغة اليابانية
                </p>
            {/if}
            {#if step == 4}
                <h2>كانجي</h2>
                <p>
                    وعلى
                    <span id="hd"> عكس </span>
                    الهيراغانا والكاتاكانا، تتألف كانجي من
                    <span id="hd"> آلاف </span>
                    الحروف التي تمثل
                    <span id="hd"> كلمات أو أفكار </span>
                    فكل حرف يمثل قطعة، وهي وحدة ذات مغزى تنقل مفهوما أو معنى محدد
                </p>
                <p>
                    وقد استمدت كانجي حروفها من
                    <span id="hd">اللغة الصينية </span>
                    وإعتمدتها في نظام الكتابة الياباني. إنها سمات لوجغرافية، بمعنى
                    أن كل حرف يمثل كلمة كاملة أو مفهوماً بدلاً من أصوات مجردة بدون
                    معنى
                </p>
                <p>
                    عدد حروف كانجي الموجودة
                    <span id="hd"> كبير جدا </span>
                    ، لكن حكومة اليابان قد أقامت مجموعة من حروف كانجي شائعة الاستخدام،
                    وتشمل هذه المجموعة ما يقرب من 2136 حرف تعتبر أساسية للقراءة والكتابة
                    في إستعمالات كل يوم
                </p>
                <p>
                    تعلم كانجي يعتبر جزء مهم من إتقان اللغة اليابانية، لأنها
                    توفر فهما أعمق لمفردات وثقافة اللغة اليابانية
                </p>
            {/if}
            {#if step == 5}
                <h2>🚀 الخطوات</h2>
                <p>
                    <span id="highlighted"> 1 الخطوة<br /></span>

                    تعلم الأبجدية والنطق. الهيراغانا والكاتاكانا يغطون كل
                    الأصوات، في الواقع يمكنك كتابة اليابانية كاملا فقط في
                    <span id="hd"> الكانا </span>
                    : (هيرغانا + كاتاكانا)
                </p>
                <p>
                    <span id="highlighted"> الخطوة 2<br /></span>
                    تعلم المفردات الأساسية والنحو عن طريق تعلم الكانجي التي تغطي
                    كل الكلمات التي تحتاجها للمحادثات اليومية والمفردات البسيطة
                </p>
                <p>
                    <span id="highlighted">الخطوة 3<br /></span>
                    قراءة الكتب المدرسية واستخدام التطبيقات ليس كافياً لتكون متمرساً
                    باليابانية.بل مشاهدة الافلام وقراءة المانجا أو الإستماع للبودكسات
                    يمكن أن يحسن مهاراتك
                </p>
            {/if}
            {#if step == numberOfSteps}
                <div id="final-check">
                    <input
                        id="cje"
                        type="checkbox"
                        on:change={(e) => {
                            // @ts-ignore
                            hideCheckbox = e.target.checked;
                        }}
                        checked={hideCheckbox}
                    />
                    <label for="cje"> أخفي المرة القادمة</label>
                </div>
            {/if}

            <div id="bottom">
                {#if step != 1}
                    <button id="back" on:click={back}>إرجع</button>
                {:else}
                    <button id="back" on:click={() => (visible = false)}
                        >!تخطى حتى لاحقا</button
                    >
                {/if}
                {#if step != numberOfSteps}
                    <button on:click={next}>التالي</button>
                {:else}
                    <button on:click={done}>!مفهوم</button>
                {/if}
            </div>
        </div>
    </main>
{/if}
<Toggle
    key="e"
    toggle={() => {
        visible = true;
    }}
/>

<style>
    main {
        width: 70vw;
        height: 70vh;
        z-index: 200;
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px 50px;
        border-radius: 20px;
        background-color: var(--bg);
        transform: translate(-50%, -50%);
        overflow-y: scroll;
        text-align: right;
    }
    #head {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #head h2 {
        text-align: center;
        font-size: 60px;
        color: var(--primary);
    }
    #head h2::before {
        content: "こにち";
    }
    #head h2:hover::before {
        content: "!مرحبا";
    }
    #progress {
        height: 5px;
        background-color: var(--primary);
        border-radius: 999px;
        transition: width 0.5s ease-out;
    }
    #content {
        margin-top: 2vh;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
    }
    #content p {
        width: 60vw;
        margin-left: auto;
        margin-right: auto;
        font-size: larger;
        line-height: 40px;
        text-align: right;
    }
    #bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 0 40px;
    }
    #bottom button {
        width: 120px;
        height: 45px;
        border-radius: 10px;
        background-color: var(--primary);
        color: white;
        font-size: 12;
        font-weight: 500;
    }
    #bottom #back {
        background-color: transparent;
        color: var(--primary);
        font-weight: bold;
    }
    #highlighted,
    #hd {
        color: var(--primary);
    }
    #final-check {
        margin-bottom: -20px;
        display: flex;
        justify-content: end;
    }

    @media (max-width: 768px) {
        main {
            padding: 20px;
            width: 80vw;
            height: 80vh;
        }
        #bottom {
            padding: 0 10px;
        }
    }
</style>
