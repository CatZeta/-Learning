<template>
    <div class="filter-nav">
        <button @click="updateFilter('all')" 
            :class="{ active: filter === 'all'}">
            All
        </button>

        <button @click="updateFilter('completed')" 
            :class="{ active: filter === 'completed'}">
            Completed
        </button>

        <button @click="updateFilter('ongoing')" 
            :class="{ active: filter === 'ongoing'}">
            Ongoing
        </button>
    </div>
</template>

<script>
    export default {
        props: ['filter'],
        methods: {
            updateFilter(by) {
                this.$emit('changeFilter', by)
            }
        }
    }
</script>

<style>
    .filter-nav button {
            background: none;
            border: none;
            color: #5855556d;
            outline: none;
            font-size: 14px;
            text-transform: uppercase;
            margin-right: 10px;
            letter-spacing: 1px;
            font-weight: bold;
            cursor: pointer;
        }
    .filter-nav button.active {
        color: #555;
    }
    
</style>